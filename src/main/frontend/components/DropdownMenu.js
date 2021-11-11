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
        url="/reflections-in-bloom/portfolio"
      ></DropdownItem>
      <DropdownItem
        leftIcon={<GrContactInfo />}
        iconText="Contact Me"
        url="/reflections-in-bloom/contact-us"
      ></DropdownItem>
    </div>
  );
};

export default DropdownMenu;
