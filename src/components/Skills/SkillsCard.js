import React from "react";
import "./SkillsCard.css";

const SkillsCard = ({ title, technologies }) => {
  return (
    <div className="skillscard">
      <div className="skillscard__header">{title}</div>
      <div className="skillscard__body">
        {technologies.map((tech) => (
          <div key={tech.id} className="skillscard__bodyMedia">
            <img src={tech.src} alt={tech.name} />
            <h4>{tech.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
