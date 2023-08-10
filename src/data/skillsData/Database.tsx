import React from 'react';
import mysql from "../../assets/skills/database/mysql.png";
import oracle from "../../assets/skills/database/oracle.png";
import mariadb from "../../assets/skills/database/mariadb.png";
import {SkillsDefinition} from "./SkillsDefinition";


export const databaseData =[
    new SkillsDefinition(
        "MySQL",
        mysql,
        <div className={"info-text"}>
            "웹표준을 지키려 노력합니다.
            "SCSS 문법에 익숙합니다.\n" +
            "styled-component, emotion을 활용할 수 있습니다.\n" +
            "BEM 방법론을 적용할 수 있습니다.\n" +
            "크로스 브라우징에 대응할 수 있습니다.\n" +
            "Antd, Chakra, Tailwind 등의 css 라이브러리를 사용할 수 있습니다.\n" +
            "keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.")
        </div>
    ),

    new SkillsDefinition(
        "Oracle",
        oracle,
        <div className={"info-text"}>
            "웹표준을 지키려 노력합니다.
            "SCSS 문법에 익숙합니다.\n" +
            "styled-component, emotion을 활용할 수 있습니다.\n" +
            "BEM 방법론을 적용할 수 있습니다.\n" +
            "크로스 브라우징에 대응할 수 있습니다.\n" +
            "Antd, Chakra, Tailwind 등의 css 라이브러리를 사용할 수 있습니다.\n" +
            "keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.")
        </div>
    ),

    new SkillsDefinition(
        "MariaDB",
        mariadb,
        <div className={"info-text"}>
            "웹표준을 지키려 노력합니다.
            "SCSS 문법에 익숙합니다.\n" +
            "styled-component, emotion을 활용할 수 있습니다.\n" +
            "BEM 방법론을 적용할 수 있습니다.\n" +
            "크로스 브라우징에 대응할 수 있습니다.\n" +
            "Antd, Chakra, Tailwind 등의 css 라이브러리를 사용할 수 있습니다.\n" +
            "keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.")
        </div>
    ),
]
