import React from "react";
import "./DrawerToggleButton.css";

const DrawerToggleButton = ({ click }) => {
  return (
    <button className="toggle__button" onClick={click}>
      <div className="toggle__buttonLine"></div>
      <div className="toggle__buttonLine"></div>
      <div className="toggle__buttonLine"></div>
    </button>
  );
};

export default DrawerToggleButton;
