import React from 'react';
import elementD from '../../assets/animation/fill(d).png'
import elementO from '../../assets/animation/fill(o).png'
import './Main.scss'
const Main = () => {
  return (
    <main className={"main-container"}>
      <ul className={"text-list-wrapper"}>
        <li className={"text-list"}>Hello, I'm</li>
        <li className={"text-list"}>Frontend Developer</li>
        <li className={"text-list"}>Taegeun Kim</li>
      </ul>

      <ul className={"info-list-wrapper"}>
        <li className={"info-list"}>taegeun4145@gmail.com</li>
        <li className={"info-list"}>GIT</li>
        <li className={"info-list"}>Resume</li>
        <li className={"info-list"}>Notion</li>
      </ul>

      <section className={"mouse-event-wrapper"}>
        <img src={elementD} alt={'d'}/>
        <img src={elementO} alt={'o'}/>
      </section>


    </main>
  );
};

export default Main;