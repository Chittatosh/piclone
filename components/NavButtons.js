import React from 'react';
import { NavLink } from 'react-router-dom';

const AddPicNav = () => (
  <NavLink
    className="btn btn-primary ml-3"
    activeClassName="btn-outline-primary"
    exact
    to="/addpicture"
    title="/addpicture"
  >
    Add a Picture <i className="far fa-image" />
  </NavLink>
);

const MyPicsNav = () => (
  <NavLink
    className="btn btn-success ml-3"
    activeClassName="btn-outline-success"
    exact
    to="/mypictures"
    title="/mypictures"
  >
    My Pictures <i className="fas fa-th" />
  </NavLink>
);

const AuthNav = () => (
  <React.Fragment>
    <NavLink
      className="btn btn-info ml-3"
      activeClassName="btn-outline-info"
      exact
      to="/createaccount"
      title="/createaccount"
    >
      Create an Account <i className="fas fa-user" />
    </NavLink>
    <NavLink
      className="btn btn-primary ml-3"
      activeClassName="btn-outline-primary"
      exact
      to="/signin"
      title="/signin"
    >
      Sign In <i className="fas fa-sign-in-alt" />
    </NavLink>
  </React.Fragment>
);

const HomeNav = () => (
  <React.Fragment>
    <NavLink
      className="navbar-brand"
      activeClassName="active"
      exact
      to="/"
      title="/"
    >
      <img src="/piclone24.png" width="24" height="24" alt="" /> Piclone
    </NavLink>
    <NavLink
      className="btn btn-success"
      activeClassName="btn-outline-success"
      exact
      to="/"
      title="/"
    >
      <i className="fas fa-home" />
    </NavLink>
  </React.Fragment>
);

export { AddPicNav, MyPicsNav, AuthNav, HomeNav };
