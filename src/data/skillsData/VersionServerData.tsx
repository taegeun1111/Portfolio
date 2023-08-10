import React from 'react';
import aws from "../../assets/skills/version_server/aws.png";
import firebase from "../../assets/skills/version_server/firebase.png";
import github from "../../assets/skills/version_server/github.png";
import git from "../../assets/skills/version_server/git.png";
import {chooseType, SkillsDefinition} from "./SkillsDefinition";
import java from "../../assets/skills/backend/java.png";


const typeVersion: chooseType = 'Version';
const typeServer: chooseType = 'Server';
export const versionServerData =[
    new SkillsDefinition(
        "AWS",
        aws,
        <div className={"info-text"}>
            "웹표준을 지키려 노력합니다.
            "SCSS 문법에 익숙합니다.\n" +
            "styled-component, emotion을 활용할 수 있습니다.\n" +
            "BEM 방법론을 적용할 수 있습니다.\n" +
            "크로스 브라우징에 대응할 수 있습니다.\n" +
            "Antd, Chakra, Tailwind 등의 css 라이브러리를 사용할 수 있습니다.\n" +
            "keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.")
        </div>,
        typeServer
    ),
    new SkillsDefinition(
        "Firebase",
        firebase,
        <div className={"info-text"}>
            "웹표준을 지키려 노력합니다.
            "SCSS 문법에 익숙합니다.\n" +
            "styled-component, emotion을 활용할 수 있습니다.\n" +
            "BEM 방법론을 적용할 수 있습니다.\n" +
            "크로스 브라우징에 대응할 수 있습니다.\n" +
            "Antd, Chakra, Tailwind 등의 css 라이브러리를 사용할 수 있습니다.\n" +
            "keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.")
        </div>,
        typeServer
    ),
    new SkillsDefinition(
        "Github",
        github,
        <div className={"info-text"}>
            "웹표준을 지키려 노력합니다.
            "SCSS 문법에 익숙합니다.\n" +
            "styled-component, emotion을 활용할 수 있습니다.\n" +
            "BEM 방법론을 적용할 수 있습니다.\n" +
            "크로스 브라우징에 대응할 수 있습니다.\n" +
            "Antd, Chakra, Tailwind 등의 css 라이브러리를 사용할 수 있습니다.\n" +
            "keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.")
        </div>,
        typeVersion
    ),
    new SkillsDefinition(
        "Git",
        git,
        <div className={"info-text"}>
            "웹표준을 지키려 노력합니다.
            "SCSS 문법에 익숙합니다.\n" +
            "styled-component, emotion을 활용할 수 있습니다.\n" +
            "BEM 방법론을 적용할 수 있습니다.\n" +
            "크로스 브라우징에 대응할 수 있습니다.\n" +
            "Antd, Chakra, Tailwind 등의 css 라이브러리를 사용할 수 있습니다.\n" +
            "keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.")
        </div>,
        typeVersion
    ),

]
