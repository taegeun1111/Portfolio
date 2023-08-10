import React from 'react';
import {teamProjectData} from "../../data/projectData/TeamProjectData";
import {projectDefinition} from "../../data/projectData/ProjectDefinition";

const TeamProject = () => {
    return (
        <ul className={"project-container"}>
            {teamProjectData.map((list: projectDefinition) => (
                <li className={"project-wrapper"} key={list.name}>
                    <img src={list.img} alt={list.name} className={"project-img"}/>
                    <div className={"project-name"}>{list.name}</div>

                    {/*hover시 block*/}
                    <section className={"project-hover-wrapper"}>
                        {list.url &&
                          <div className={"project-hover-url"}>{list.url}</div>
                        }
                        <div className={"project-hover-git"}>{list.git}</div>
                        <div className={"project-hover-notion"}>{list.notion}</div>
                        <div className={"project-hover-skills"}>{list.skills}</div>
                    </section>
                </li>
            ))}
        </ul>
    );
};

export default TeamProject;