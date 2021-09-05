import React, { useState, useEffect } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

import LandingPage from "./LandingPage";

const NavBar = (props) => {
  return (
    <div>
      <div className="header">
        <div className="left">
          <Link to="/">
            <h3>Home</h3>
          </Link>
        </div>
        <div className="right">contact</div>
      </div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
};

export default NavBar;
