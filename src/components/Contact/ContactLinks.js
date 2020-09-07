import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton } from "@material-ui/core";
import "./ContactLinks.css";

const ContactLinks = () => {
  return (
    <div className="contactlinks">
      <a
        href="https://github.com/ifeanyidike"
        target="_blank"
        rel="noreferrer noopener"
      >
        <IconButton style={{ color: "#000" }}>
          <GitHubIcon />
        </IconButton>
      </a>
      <a
        href="https://twitter.com/deepinsideai"
        target="_blank"
        rel="noreferrer noopener"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/ifeanyidesmonddike"
        target="_blank"
        rel="noreferrer noopener"
      >
        <IconButton style={{ color: "#0e76a8" }}>
          <LinkedInIcon />
        </IconButton>
      </a>
    </div>
  );
};

export default ContactLinks;
