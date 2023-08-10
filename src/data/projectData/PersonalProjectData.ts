import {chooseProjectType, projectDefinition} from "./ProjectDefinition";

import salad from "../../assets/project/persoanl/greensalady.png";
import todo from "../../assets/project/persoanl/todo.png";

const typePersonal: chooseProjectType = 'Personal';

export const teamProjectData: projectDefinition[] = [
    new projectDefinition(
        "TODO",
        todo,
        ["React", "Java"],
        typePersonal,
        "https://github.com/taegeun1111/Project_TOTO-APP-FE",
        "https://wind-hardboard-c59.notion.site/TODO-d3688d303d0048cd99cc21bdbe509ccb?pvs=4",
    ),

    new projectDefinition(
        "Green Salady",
        salad,
        ["React", "Firebase"],
        typePersonal,
        "https://github.com/taegeun1111/green-salady",
        "https://wind-hardboard-c59.notion.site/Green-Salady-974ab6e1f11043ee81acf4bc720ceb1f?pvs=4",
    )

]