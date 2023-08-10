import React from 'react';
import {personalProjectData} from "../../data/projectData/PersonalProjectData";
import {projectDefinition} from "../../data/projectData/ProjectDefinition";

const PersonalProject = () => {
    return (
        <ul className={"project-container"}>
            {personalProjectData.map((list: projectDefinition) => (
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

export default PersonalProject;