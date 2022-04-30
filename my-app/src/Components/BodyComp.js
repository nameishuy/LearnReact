import React, { useState } from "react";
import "../CSS/Body.css";
import { deleteClass, addClass, mineData } from "../Data/data";
import { Link } from "react-router-dom";
const BodyComp = (props) => {
  const [skillsTab, setSkillsTab] = useState(false);
  const changeTab = () => setSkillsTab(!skillsTab);
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
        <div className="MyProjects-Details">
          {mineData.projects.map((project) => (
            <Link
              to={`/LearnReact/Project/${project.id}`}
              style={{
                textDecoration: "none",
                color: "black",
                borderRadius: "0.5rem",
                boxShadow: "0 0 5px 4px rgba(218, 216, 216, 0.685)",
                backgroundColor: "white",
                overflow: "hidden",
              }}
              className={`MyProjectContainer ${
                props.background ? "" : "LightTheme"
              }`}
            >
              <div className="MyProject" key={project.id}>
                <div className="MyProject_PictureContainer">
                  <img src={project.picProject} alt="Ảnh Đồ Án Tượng Trưng" />
                </div>
                <span className="MyProject_ContentContainer">
                  {project.nameProject}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BodyComp;
