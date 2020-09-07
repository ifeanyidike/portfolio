import React, { useState, useEffect } from "react";
import SkillsHeader from "../PageHeader/PageHeader";
import SkillsFooter from "../PageHeader/PageFooter";
import SkillsCard from "./SkillsCard";
import CircularProgress from "@material-ui/core/CircularProgress";
// import technologies from "../elements/technologies";
import db from "../firebase";
import "./Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    db.collection("skills")
      .orderBy("title", "asc")
      .onSnapshot((snapshot) =>
        setSkills(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);
  console.log(skills);
  return (
    <div className="skills">
      <SkillsHeader title="Skills" />
      {skills === undefined || skills.length === 0 ? (
        <div className="skills__circularprogress">
          <CircularProgress disableShrink className="circularprogress" />
        </div>
      ) : (
        skills.map((skill) => (
          <SkillsCard
            key={skill.id}
            title={skill.title}
            technologies={skill.technologies}
          />
        ))
      )}

      <SkillsFooter />
    </div>
  );
};

export default Skills;
