import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Links from "./../Links";
import "./Toolbar.css";

const Toolbar = ({ drawerClickHandler }) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <MenuIcon className="toolbar__menu" onClick={drawerClickHandler} />

        <div className="toolbar__logo">
          <h1>Ifeanyi Dike</h1>
          <span>Full Stack Developer</span>
        </div>
        <div className="toolbar__navigationItems">
          <Links bool="none" />
        </div>
      </nav>
      <div></div>
    </header>
  );
};

export default Toolbar;
