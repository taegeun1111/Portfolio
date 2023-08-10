import React from "react";

export type chooseType = 'Language' | 'Framework' | 'Version' | 'Server';

export class SkillsDefinition {
    type?: chooseType; // 선택적 속성
    name: string;
    img: string;
    info: React.ReactNode;

    constructor(name: string, img: string, info: React.ReactNode, type?: chooseType) {
        this.name = name;
        this.img = img;
        this.info = info;
        this.type = type;
    }
}
