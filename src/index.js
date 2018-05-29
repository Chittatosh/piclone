const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const express = require('express');
const resolvers = require('./resolvers');
const htmlString = require('./htmlString');
require('pretty-error').start();

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql', // the auto-generated GraphQL schema of the Prisma API
  endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API
  // debug: true, // log all GraphQL queries & mutations sent to the Prisma API
  secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml`
}); // values set in `.env`

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  context: req => ({ ...req, db }),
});

const app = server.express;
app.use(express.static('dist'));
app.get(
  ['/', '/signin', '/createaccount', '/addpicture', '/mypictures'],
  (req, res) => res.send(htmlString),
);

const options = {
  endpoint: '/graphql',
  playground: '/playground',
};
server.start(options, ({ port }) =>
  console.log(`Server is running on http://localhost:${port}`),
);
