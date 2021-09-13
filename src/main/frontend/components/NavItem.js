import React from "react";
import { VscDash } from "react-icons/vsc";

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        <VscDash />
      </a>
      <a href="#" className="icon-button">
        <VscDash />
      </a>
      <a href="#" className="icon-button">
        <VscDash />
      </a>
    </li>
  );
};

export default NavItem;
