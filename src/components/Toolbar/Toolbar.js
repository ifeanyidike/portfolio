import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
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
          <ul>
            <li>
              <a
                href="https://github.com/ifeanyidike"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <GitHubIcon />
                </IconButton>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/ifeanyidesmonddike"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/deepinsideai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <TwitterIcon />
                </IconButton>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div></div>
    </header>
  );
};

export default Toolbar;
