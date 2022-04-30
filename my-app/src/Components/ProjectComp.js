import React, { useState } from "react";
import UnderDevelopComp from "./UnderDevelopComp";
import { useParams } from "react-router-dom";
import { mineData } from "../Data/data";
import "../CSS/ProjectComp.css";
const ProjectComp = () => {
  const param = useParams();

  return (
    <div>
      <UnderDevelopComp></UnderDevelopComp>
    </div>
  );
};

export default ProjectComp;
