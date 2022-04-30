import React from "react";
import { sorryInfo } from "../Data/data";
import "../CSS/ProjectComp.css";
const ProjectComp = () => {
  return (
    <div>
      <div className="SorryAnnouncementContainer">
        <img src={sorryInfo.picture} alt="Mèo Chắp Tay Xin Lỗi." />
        <span>{sorryInfo.content}</span>
      </div>
    </div>
  );
};

export default ProjectComp;
