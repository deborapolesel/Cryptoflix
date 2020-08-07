import React from 'react';
import Logo from '../../assets/img/logo.svg';
import './style.css';

import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Reactflix logo" />
      </a>
      <Button as="a" href="https://github.com/LizzardMedeiros/Reactflix">
        <img
          src="https://simpleicons.org/icons/github.svg" 
          alt="Github logo"
          width="32px"
        />
      </Button>
    </nav>
  );
}

export default Menu;