import React from 'react';
import {SkillsDefinition} from "../../data/skillsData/SkillsDefinition";
import {databaseData} from "../../data/skillsData/Database";

const Database = () => {
  return (
      <ul className={"list-container"}>
        {databaseData.map((list :SkillsDefinition)=>(
            <li className={"list-wrapper"} key={list.name}>
              <img src={list.img} alt={list.name} className={"list-img"}/>
              <div className={"list-name"}>{list.name}</div>

              {/*hover시 block*/}
              <section className={"list-hover-wrapper"}>
                <div className={"list-hover-info"}>{list.info}</div>
              </section>
            </li>
        ))}
      </ul>
  );
};

export default Database;