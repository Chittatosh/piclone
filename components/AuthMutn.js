import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';

import AuthForm from './AuthForm';
import { USER } from '../client/constants';

const propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

const AuthMutn = ({ location: { pathname } }) => {
  const signupBool = pathname === '/createaccount';
  const field = signupBool ? 'signup' : 'login';
  const nameVar = signupBool ? '$userName: String!,' : '';
  const nameArg = signupBool ? 'userName: $userName,' : '';
  return (
    <Mutation
      mutation={gql`
        mutation ${field}(${nameVar} $email: String!, $password: String!) {
          ${field}(${nameArg} email: $email, password: $password) {
            token
            user ${USER}
          }
        }
      `}
      update={(
        cache,
        {
          data: {
            [field]: { user },
          },
        },
      ) =>
        cache.writeQuery({
          query: gql`{ me ${USER} }`,
          data: { me: user },
        })
      }
    >
      {(mutateFunc, { loading, error, data }) => {
        const { token } = (data && data[field]) || { token: '' };
        const errorMessage = (error && error.message) || '';
        return (
          <AuthForm
            {...{ signupBool, mutateFunc, loading, errorMessage, token }}
          />
        );
      }}
    </Mutation>
  );
};

AuthMutn.propTypes = propTypes;

export default AuthMutn;
