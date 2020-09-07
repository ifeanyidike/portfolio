import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import db from "../firebase";

import ResumeFooter from "../PageHeader/PageFooter";
import "./Resume.css";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Resume = () => {
  const classes = useStyles();
  const [resume, setResume] = useState([]);

  useEffect(() => {
    db.collection("resume").onSnapshot((snapshot) =>
      setResume(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  const cv = resume[0];

  return (
    <div className="resume">
      <div className="resume__body">
        {resume === undefined || resume.length === 0 ? (
          <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          <div>
            {/* Top Section */}

            <div className="resume__bodyTop">
              <Avatar
                className="resume__bodyAvatar"
                src={require("../../images/pic.png")}
              />
              <div className="resume__topdetails">
                <h1>{cv.name}</h1>
                <h4>{cv.role}</h4>
                <p>{cv.short_desc}</p>
              </div>
              <div className="resume__toplinks">
                <a
                  href="https://www.twitter.com/deepinsideai"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IconButton style={{ color: "#00acee" }}>
                    <TwitterIcon fontSize="large" />
                  </IconButton>
                </a>
                <a
                  href="https://www.linkedin.com/in/ifeanyidesmonddike"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IconButton style={{ color: "#0e76a8" }}>
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                </a>
                <a
                  href="https://www.github.com/ifeanyidike"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IconButton>
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                </a>
              </div>
            </div>

            {/* Skills Section */}
            <div className="resume__bodySkills">
              <div className="spacer"></div>
              <div className="resume__skillsContent">
                <h4>Skills</h4>
                {cv.skills.map((skill) => (
                  <p key={skill} className="item">
                    <ArrowRightIcon />
                    <span>{skill}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="resume__details">
              <div className="resume__detailsCaption">
                <div className="spacer"></div>
                <h4>Experiences</h4>
              </div>
              {Object.entries(cv.experiences).map((exp) => (
                <div key={exp[0]} className="resume__detailsItem">
                  <div className="itemleft">
                    <h6>{exp[1].company}</h6>
                    <small>{exp[1].date}</small>
                    <small>
                      <a href={exp[1].url}>{exp[1].url}</a>
                    </small>
                  </div>
                  <div className="itemright">
                    <h5>{exp[1].role}</h5>

                    <span>{exp[1].short_desc}</span>

                    {exp[1].functions.map((func) => (
                      <p className="item" key={func}>
                        <ArrowRightIcon />
                        <span>{func}</span>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education Section */}
            <div className="resume__details">
              <div className="resume__detailsCaption">
                <div className="spacer"></div>
                <h4>Education</h4>
              </div>
              {Object.entries(cv.Education).map((edu) => (
                <div key={edu[0]} className="resume__detailsItem">
                  <div className="itemleft item">
                    <h6>{edu[1].school}</h6>
                    <small>{edu[1].date}</small>
                    <small>
                      <a href={edu[1].url}>{edu[1].url}</a>
                    </small>
                  </div>
                  <div className="itemright">
                    <h5>{edu[1].course}</h5>

                    {edu[1].activities.map((act) => (
                      <p key={act} className="item">
                        <ArrowRightIcon />
                        <span>{act}</span>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <ResumeFooter />
    </div>
  );
};

export default Resume;
