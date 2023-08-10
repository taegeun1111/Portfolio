import React from 'react';

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