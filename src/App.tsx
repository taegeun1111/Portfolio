import React from 'react';
import './App.css';
import Header from "./component/header/Header";
import Main from "./component/main/Main";
import AboutMe from "./component/about/AboutMe";
import Skills from "./component/skills/Skills";
import Project from "./component/project/Project";
import FeedbackForm from "./component/Feedback/FeedbackForm";

function App() {
    return (
        <>
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Project/>
            <FeedbackForm/>
        </>
    );
}

export default App;
