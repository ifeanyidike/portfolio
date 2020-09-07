import React from "react";
import "./SideDrawer.css";
import HighlightIcon from "@material-ui/icons/Highlight";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import WorkIcon from "@material-ui/icons/Work";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import EmailIcon from "@material-ui/icons/Email";
import CreateIcon from "@material-ui/icons/Create";
import DescriptionIcon from "@material-ui/icons/Description";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton } from "@material-ui/core";
import SideDrawerItem from "./SideDrawerItem";
import { Link } from "react-router-dom";

const SideDrawer = ({ show }) => {
  let drawerClasses = "sidedrawer";
  if (show) {
    drawerClasses = "sidedrawer open";
  }

  const alterBold = (e) => {
    let bold = document.getElementsByClassName("sidedrawer__bold");
    if (bold.length) {
      while (bold.length) {
        bold[0].classList.remove("sidedrawer__bold");
      }
    }
    e.target.classList.add("sidedrawer__bold");
  };

  return (
    <nav className={drawerClasses}>
      <ul>
        <Link to="/">
          <li className="sidedrawer__header">
            <h1>Ifeanyi Dike</h1>
            <span>Full Stack Developer</span>
          </li>
        </Link>
        <SideDrawerItem
          click={alterBold}
          IconType={HighlightIcon}
          iconColor="#008073"
          text="My Offer"
          to="/my-offer"
        />
        <SideDrawerItem
          click={alterBold}
          IconType={TrendingUpIcon}
          iconColor="#00bcd4"
          text="Experience"
          to="/experience"
        />
        <SideDrawerItem
          click={alterBold}
          IconType={WorkIcon}
          iconColor="#3f51b5"
          text="Portfolio"
          to="/portfolio"
        />
        <SideDrawerItem
          click={alterBold}
          IconType={EqualizerIcon}
          iconColor="#9c27b0"
          text="Skills"
          to="/skills"
        />
        {/* <SideDrawerItem
          click={alterBold}
          IconType={StarIcon}
          iconColor="#f44336"
          text="Awards"
          to="awards"
        />
        <SideDrawerItem
          click={alterBold}
          IconType={SchoolIcon}
          iconColor="#ff9800"
          text="Education"
          to="/education"
        /> */}
        <SideDrawerItem
          click={alterBold}
          IconType={EmailIcon}
          iconColor="#795548"
          text="Contact"
          to="/contact"
        />
        <SideDrawerItem
          click={alterBold}
          IconType={CreateIcon}
          iconColor="#fbc02d"
          text="Blog"
          to="/blog"
        />
        <SideDrawerItem
          click={alterBold}
          IconType={DescriptionIcon}
          iconColor="#424242"
          text="Resume"
          to="/resume"
        />
        <li className="sidedrawer__iconsList">
          <div>
            <a
              href="https://web.facebook.com/codesprodigy/"
              target="_blank"
              rel="noreferrer noopener"
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
              href="https://www.linkedin.com/in/ifeanyidesmonddike"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconButton style={{ color: "#0e76a8" }}>
                <LinkedInIcon />
              </IconButton>
            </a>

            <a
              href="https://www.twitter.com/deepinsideai"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconButton style={{ color: "#00acee" }}>
                <TwitterIcon />
              </IconButton>
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
