import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const LoadingAlert = ({ text }) => (
  <div className="alert alert-primary text-dark text-center" role="alert">
    {text}
  </div>
);

const ErrorAlert = ({ text }) => (
  <div className="alert alert-danger text-dark text-center" role="alert">
    {text}
  </div>
);

const AuthAlert = ({ text }) => (
  <div
    className="alert alert-success alert-dismissible fade show text-dark"
    role="alert"
  >
    {text === 'add' && (
      <React.Fragment>
        <NavLink exact to="/createaccount" title="/createaccount">
          <span className="alert-link">
            <u>Create an Account</u>
          </span>
        </NavLink>
        {' / '}
      </React.Fragment>
    )}
    <NavLink exact to="/signin" title="/signin">
      <span className="alert-link">
        <u>Sign In</u>
      </span>
    </NavLink>
    {` to ${text} Pictures.`}
    <button
      type="button"
      className="close"
      data-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);

LoadingAlert.propTypes = propTypes;
ErrorAlert.propTypes = propTypes;
AuthAlert.propTypes = propTypes;

export { LoadingAlert, ErrorAlert, AuthAlert };
