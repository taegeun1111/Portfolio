import React from 'react';
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className={"header-container"}>
      <img src={logo} alt={logo} className={"logo"}/>
      <ul className={"tab-list-wrapper"}>
        <li className={"tab-list"}>About ME</li>
        <li className={"tab-list"}>Skills</li>
        <li className={"tab-list"}>Projects</li>
        <li className={"tab-list"}>Etc</li>
      </ul>

      <button type={"button"}>Contact ME</button>
    </header>
  );
};

export default Header;