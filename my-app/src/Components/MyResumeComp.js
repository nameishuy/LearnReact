import React from "react";
import "../CSS/MyResumeComp.css";
import { mineData } from "../Data/data";
const MyResumeComp = () => {
  return (
    <div className="MyResumeContainer">
      <div className="MyResume-Description">
        <h1>About Me</h1>
        <span>{mineData.description}</span>
      </div>
      <div className="MyResume-Education">
        <h1>Education</h1>
        <div className="MyResume-Education_MySchoolsDetails">
          {mineData.education.map((school) => (
            <div className="MySchool">
              <div>
                <ion-icon name="briefcase-outline"></ion-icon>
              </div>
              <div className="MySchool-Content">
                <span>{school.schoolName}</span>
                <span>{school.schoolYear}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyResumeComp;
