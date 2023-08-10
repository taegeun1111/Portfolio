import React from 'react';
import java from "../../assets/skills/backend/java.png";
import spring from "../../assets/skills/backend/spring.png";
import springBoot from "../../assets/skills/backend/springBoot.png";
import {chooseType, SkillsDefinition} from "./SkillsDefinition";


const typeLanguage: chooseType = 'Language';
const typeFramework: chooseType = 'Framework';

export const backendData: SkillsDefinition[] = [
    new SkillsDefinition(
        "Java",
        java,
        <div className={"info-text"}>
            "웹표준을 지키려 노력합니다.
            "SCSS 문법에 익숙합니다.\n" +
            "styled-component, emotion을 활용할 수 있습니다.\n" +
            "BEM 방법론을 적용할 수 있습니다.\n" +
            "크로스 브라우징에 대응할 수 있습니다.\n" +
            "Antd, Chakra, Tailwind 등의 css 라이브러리를 사용할 수 있습니다.\n" +
            "keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.")
        </div>,
        typeLanguage
    ),

    new SkillsDefinition(
        "Spring",
        spring,
        <div className={"info-text"}>
            "웹표준을 지키려 노력합니다.
            "SCSS 문법에 익숙합니다.\n" +
            "styled-component, emotion을 활용할 수 있습니다.\n" +
            "BEM 방법론을 적용할 수 있습니다.\n" +
            "크로스 브라우징에 대응할 수 있습니다.\n" +
            "Antd, Chakra, Tailwind 등의 css 라이브러리를 사용할 수 있습니다.\n" +
            "keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.")
        </div>,
        typeFramework
    ),

    new SkillsDefinition(
        "SpringBoot",
        springBoot,
        <div className={"info-text"}>
            "웹표준을 지키려 노력합니다.
            "SCSS 문법에 익숙합니다.\n" +
            "styled-component, emotion을 활용할 수 있습니다.\n" +
            "BEM 방법론을 적용할 수 있습니다.\n" +
            "크로스 브라우징에 대응할 수 있습니다.\n" +
            "Antd, Chakra, Tailwind 등의 css 라이브러리를 사용할 수 있습니다.\n" +
            "keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.")
        </div>,
        typeFramework
    )
]