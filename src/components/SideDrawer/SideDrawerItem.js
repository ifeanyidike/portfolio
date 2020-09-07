import React from "react";
import "./SideDrawerItem.css";
import { Link } from "react-router-dom";

const SideDrawerItems = ({ IconType, iconColor, text, to, click }) => {
  const color = {
    color: iconColor,
  };
  return (
    <>
      <li onClick={click}>
        <Link className="sidedrawer__item" to={to}>
          <IconType className="sidedrawer__icon" style={color} />
          <p>{text}</p>
        </Link>
      </li>
    </>
  );
};

export default SideDrawerItems;
