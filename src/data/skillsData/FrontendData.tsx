import {chooseType, SkillsDefinition} from "./SkillsDefinition";
import htmlCss from '../../assets/skills/frontend/html_css.png'
import js from '../../assets/skills/frontend/js.png'
import ts from '../../assets/skills/frontend/ts.png'
import react from '../../assets/skills/frontend/react.png'
import sass from '../../assets/skills/frontend/sass.png'
import redux from '../../assets/skills/frontend/redux.png'

const typeLanguage: chooseType = 'Language';
const typeFramework: chooseType = 'Framework';

export const frontendData : SkillsDefinition[] = [
    new SkillsDefinition(
        "HTML/CSS",
        htmlCss,
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
        "Javascript",
        js,
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
        "Typescript",
        ts,
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
        "React.js",
        react,
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
        "Redux",
        redux,
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
        "Sass",
        sass,
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