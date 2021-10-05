import React from "react";
import("../Styles/_skill.scss");

const SkillSection = ({ skill, progress, width }) => {
  return (
    <div>
      <div className="SkillsSection">
        <div className="skills-container">
          <h5 className="skill-title">{skill}</h5>
          <div className="skill-bar">
            <p className="skill-text">{progress}</p>
            <div className="skill-progress">
              <div className="progress">
                <div className="inner-pregress" style={{ width: width }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
