import React from 'react';

import MyNameQry from './MyNameQry';
import { HomeNav } from './NavButtons';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
    <HomeNav />
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <MyNameQry />
      </ul>
    </div>
  </nav>
);

export default Navbar;
