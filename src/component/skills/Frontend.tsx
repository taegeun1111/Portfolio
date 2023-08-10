import React from 'react';
import {frontendData} from "../../data/skillsData/FrontendData";
import {SkillsDefinition} from "../../data/skillsData/SkillsDefinition";

const Frontend = () => {
  return (
    <ul className={"list-container"}>
      {frontendData.map((list :SkillsDefinition)=>(
        <li className={"list-wrapper"} key={list.name}>
          <img src={list.img} alt={list.name} className={"list-img"}/>
          <div className={"list-name"}>{list.name}</div>

          {/*hover시 block*/}
          <section className={"list-hover-wrapper"}>
            <div className={"list-hover-type"}>{list.type}</div>
            <div className={"list-hover-info"}>{list.info}</div>
          </section>
        </li>
      ))}
    </ul>
  );
};

export default Frontend;