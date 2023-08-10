import React from 'react';
import Frontend from "./Frontend";
import Backend from "./Backend";
import VersionServer from "./VersionServer";
import Database from "./Database";

const Skills = () => {
  return (
    <div className={"skills-list-container"}>
      <h1 className={"skills-main-text"}>Skills</h1>
      <ul className={"skills-wrapper"}>
        <li className={"skills-list"}>Frontend</li>
        <li className={"skills-list"}>Backend</li>
        <li className={"skills-list"}>Version&Server</li>
        <li className={"skills-list"}>Database</li>
      </ul>
      <Frontend/>
      <Backend/>
      <VersionServer/>
      <Database/>
    </div>
  );
};

export default Skills;