import React from "react";

export type chooseProjectType = 'Team' | 'Personal';

export class projectDefinition {
    type: chooseProjectType; // 선택적 속성
    name: string;
    img: string;
    skills: string[];
    url ?: string;
    git ?: string;
    notion ?: string;

    constructor(name: string, img: string, skills: string[], type: chooseProjectType, git ?: string, notion ?: string, url ?: string) {
        this.name = name;
        this.type = type;
        this.img = img;
        this.skills = skills;
        this.git = git;
        this.notion = notion;
        this.url = url;
    }
}
