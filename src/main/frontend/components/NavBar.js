import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

import LandingPage from "./LandingPage";
import NavItem from "./NavItem";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <a href="/">Home </a>
      <a href="/">Contact Me </a>
      <a href="/"> Portfolio</a>
      <nav className="navbar">
        <ul className="navbar-nav">
          <NavItem icon={<AiFillCaretDown />}></NavItem>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
};

export default NavBar;
