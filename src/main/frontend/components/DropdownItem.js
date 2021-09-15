import React from "react";

const DropdownItem = (props) => {
  return (
    <a href="#" className="menu-item">
      <span className="icon-button">{props.leftIcon}</span>
      <span className="icon-right">{props.rightIcon}</span>
    </a>
  );
};

export default DropdownItem;
