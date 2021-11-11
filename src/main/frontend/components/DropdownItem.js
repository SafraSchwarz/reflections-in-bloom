import React from "react";

const DropdownItem = (props) => {
  return (
    <a href={props.url} className="menu-item">
      <span className="icon-button">{props.leftIcon}</span>
      {props.iconText}
    </a>
  );
};

export default DropdownItem;
