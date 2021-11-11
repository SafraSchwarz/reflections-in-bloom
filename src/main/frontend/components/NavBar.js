import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

import LandingPage from "./LandingPage";
import NavItem from "./NavItem";
import Portfolio from "./Portfolio";
import ContactUsForm from "./ContactUsForm";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <a href="/reflections-in-bloom">Home </a>
      <a href="/reflections-in-bloom/contact-us">Contact us</a>
      <a href="/reflections-in-bloom/portfolio"> Portfolio</a>
      <nav className="navbar">
        <ul className="navbar-nav">
          <NavItem icon={<AiFillCaretDown />}></NavItem>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Redirect to="/reflections-in-bloom" />
        </Route>
        <Route exact path="/reflections-in-bloom" component={LandingPage} />
        <Route
          exact
          path="/reflections-in-bloom/portfolio"
          component={Portfolio}
        />
        <Route
          exact
          path="/reflections-in-bloom/contact-us"
          component={ContactUsForm}
        />
      </Switch>
    </div>
  );
};

export default NavBar;
