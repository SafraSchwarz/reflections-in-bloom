import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

import DropdownItem from "./DropdownItem";

const DropdownMenu = (props) => {
  return (
    <div className="dropdown">
      <DropdownItem leftIcon={<AiFillCaretRight />}>Portfolio</DropdownItem>
      <DropdownItem leftIcon={<AiFillCaretRight />}>Contact Me</DropdownItem>
    </div>
  );
};

export default DropdownMenu;
