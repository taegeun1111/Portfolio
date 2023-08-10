import {chooseProjectType, projectDefinition} from "./ProjectDefinition";
import ddamddamClub from "../../assets/project/team/ddamddamclub.png"
import planner from "../../assets/project/team/planner.png"
import mountainDo from "../../assets/project/team/mountaindo.png"

const typeTeam: chooseProjectType = 'Team';

export const teamProjectData: projectDefinition[] = [
    new projectDefinition(
        "ddamddamclub",
        ddamddamClub,
        ["React", "Java", "AWS"],
        typeTeam,
        "https://github.com/taegeun1111/TeamProject05_ddamddamclub",
        "https://wind-hardboard-c59.notion.site/DDAMDDAM-CLUB-41741d0eee0942158d614cd134cccb2c",
        "http://ddamddamclub.shop/"
    ),

    new projectDefinition(
        "Mountain-Do",
        mountainDo,
        ["Jsp", "Java"],
        typeTeam,
        "https://github.com/taegeun1111/TeamProject04_mountain-Do/tree/develope",
        "https://wind-hardboard-c59.notion.site/Mountain-Do-e1033de6612548fcbf7dd1dd54f7115e?pvs=4",
    ),

    new projectDefinition(
        "StudyPlanner",
        planner,
        ["Javascript"],
        typeTeam,
        "https://github.com/taegeun1111/TeamProject02_Studyplanner",
        "https://wind-hardboard-c59.notion.site/StudyPlanner-377c2c0fda8e4c859020d2edb7b16458?pvs=4",
    ),

]