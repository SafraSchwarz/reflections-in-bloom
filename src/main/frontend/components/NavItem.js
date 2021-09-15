import React, { useState, useEffect } from "react";

import DropdownMenu from "./DropdownMenu";

const NavItem = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  let menu;

  if (openMenu) {
    menu = <DropdownMenu />;
  } else {
    menu = <div></div>;
  }

  return (
    <li className="nav-item">
      <a
        href="#"
        className="icon-button"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {props.icon}
      </a>
      {menu}
    </li>
  );
};

export default NavItem;
