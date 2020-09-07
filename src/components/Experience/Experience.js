import React, { useState, useEffect } from "react";
import ExperienceHeader from "../PageHeader/PageHeader";
import ExperienceFooter from "../PageHeader/PageFooter";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Avatar from "@material-ui/core/Avatar";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import db from "../firebase";

import "./Experience.css";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  avatar: {
    backgroundColor: "#f44336",
  },
}));

const Experience = () => {
  const classes = useStyles();
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    db.collection("experiences").onSnapshot((snapshot) =>
      setExperiences(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  console.log(experiences);
  return (
    <div className="experience">
      <ExperienceHeader title="Experience" />
      <div className="experience__body">
        {experiences === undefined || experiences.length === 0 ? (
          <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          experiences.map((experience) => (
            <div key={experience.id} className="experience__bodyItem">
              <div className="experience__caption">
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {experience.logo}
                </Avatar>
                <h3>{experience.company}</h3>
              </div>
              <small>{experience.duration}</small>
              <h4>{experience.position}</h4>

              <span>Roles Served</span>

              {experience.functions.map((func) => (
                <div className="experience__functions">
                  <CheckBoxIcon />
                  <p key={func}>{func}</p>
                </div>
              ))}

              <span>Technologies </span>
              <div className="experience__tech">
                {experience.technologies.map((tech) => (
                  <img key={tech} src={tech} alt={tech} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      <ExperienceFooter />
    </div>
  );
};

export default Experience;
