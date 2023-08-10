import React from 'react';
import TeamProject from "./TeamProject";
import PersonalProject from "./PersonalProject";

const Project = () => {
  return (
    <div className={"project-list-container"}>
      <h1 className={"project-main-text"}>Skills</h1>
      <TeamProject/>
      <PersonalProject/>
    </div>
  );
};

export default Project;