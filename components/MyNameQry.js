import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { AddPicNav, MyPicsNav, AuthNav } from './NavButtons';
import { AUTH_TOKEN, ME_QUERY } from '../client/constants';

const propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

class MyNameQry extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignOut = () => {
      localStorage.removeItem(AUTH_TOKEN);
      this.props.history.push('/');
    };
  }
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return authToken ? (
      <Query query={ME_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching Your Name...</div>;
          if (error) return <div className="text-danger">{error.message}</div>;
          return (
            <React.Fragment>
              <span className="navbar-text text-dark ml-3">
                Hello, {data.me.userName}!
              </span>
              <AddPicNav />
              <MyPicsNav />
              <button
                type="button"
                className="btn btn-info ml-3"
                onClick={this.handleSignOut}
              >
                Sign Out <i className="fas fa-sign-out-alt" />
              </button>
            </React.Fragment>
          );
        }}
      </Query>
    ) : (
      <AuthNav />
    );
  }
}

MyNameQry.propTypes = propTypes;

export default withRouter(MyNameQry);
