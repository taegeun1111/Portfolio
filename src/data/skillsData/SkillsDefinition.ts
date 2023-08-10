import React from "react";

export type chooseSkillsType = 'Language' | 'Framework' | 'Version' | 'Server';

export class SkillsDefinition {
    type?: chooseSkillsType; // 선택적 속성
    name: string;
    img: string;
    info: React.ReactNode;

    constructor(name: string, img: string, info: React.ReactNode, type?: chooseSkillsType) {
        this.name = name;
        this.img = img;
        this.info = info;
        this.type = type;
    }
}
