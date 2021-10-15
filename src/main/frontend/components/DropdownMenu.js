import React from "react";
import { GrContactInfo } from "react-icons/Gr";
import { BsFillFolderFill } from "react-icons/bs";

import DropdownItem from "./DropdownItem";

const DropdownMenu = (props) => {
  return (
    <div className="dropdown">
      <DropdownItem
        leftIcon={<BsFillFolderFill />}
        iconText="Portfolio"
      ></DropdownItem>
      <DropdownItem
        leftIcon={<GrContactInfo />}
        iconText="Contact Me"
      ></DropdownItem>
    </div>
  );
};

export default DropdownMenu;
