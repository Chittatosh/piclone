const jwt = require('jsonwebtoken');

class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}

function getUserId(ctx) {
  const Authorization = ctx.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    return userId;
  }
  throw new AuthError();
}

const jsUrl = process.env.NODE_ENV
  ? '/main.js' // production
  : 'http://localhost:3001/main.js'; // dev
console.log('\x1b[35m%s\x1b[0m', `${process.env.NODE_ENV} - ${jsUrl}`);

module.exports = {
  getUserId,
  AuthError,
  jsUrl,
};
