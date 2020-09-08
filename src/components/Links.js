import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import { IconButton } from "@material-ui/core";

const Links = ({ bool }) => {
  return (
    <>
      <a
        href="https://web.facebook.com/codesprodigy/"
        target="_blank"
        rel="noreferrer noopener"
        style={{ display: `${bool}` }}
      >
        <IconButton style={{ color: "#3b5998" }}>
          <FacebookIcon />
        </IconButton>
      </a>
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
        <IconButton style={{ color: "#00acee" }}>
          <TwitterIcon />
        </IconButton>
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
    </>
  );
};

export default Links;
