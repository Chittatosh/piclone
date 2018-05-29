import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

import { AUTH_TOKEN } from './constants';
import App from '../components/App';

const client = new ApolloClient({
  request: async operation => {
    const token = await localStorage.getItem(AUTH_TOKEN);
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, // Uses default endpoint -> { uri: '/graphql' }
});

const hotRender = () =>
  render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root'),
  );

hotRender();

if (module.hot) {
  module.hot.accept('../components/App', hotRender);
}
