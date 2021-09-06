import React, { useState, useEffect } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

import LandingPage from "./LandingPage";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <nav className="navbar">
        <ul className="navbar-nav"></ul>
      </nav>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
};

export default NavBar;
