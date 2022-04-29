import React, { useState } from "react";
import "../CSS/Body.css";
import { deleteClass, addClass, mineData } from "../Data/data";
const BodyComp = () => {
  const [skillsTab, setSkillsTab] = useState(false);
  const changeTab = () => setSkillsTab(!skillsTab);
  console.log(skillsTab);
  return (
    <div className="Body-Container">
      <div className="SkillsAndProjects">
        <div
          className={`MyProjects ${skillsTab === false ? "isChoosed" : ""}`}
          onClick={
            skillsTab === false
              ? () => {
                  deleteClass("MySkills");
                }
              : () => {
                  changeTab();
                  addClass("MySkills");
                  deleteClass("MyProjects");
                }
          }
          id="MyProjects"
        >
          Projects
        </div>
        <div
          className={`MySkills ${skillsTab === true ? "isChoosed" : ""}`}
          onClick={
            skillsTab === true
              ? () => {
                  deleteClass("MyProjects");
                }
              : () => {
                  changeTab();
                  deleteClass("MyProjects");
                }
          }
          id="MySkills"
        >
          Skills
        </div>
      </div>
      {skillsTab ? (
        <div className="MySkills-Details">
          {mineData.skills.map((skill, index) => {
            return (
              <div className="MySkill">
                <ion-icon name="checkmark-circle-outline"></ion-icon>
                <div className="MySkillName">{skill}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="MyProjects-Details">My Project</div>
      )}
    </div>
  );
};

export default BodyComp;
