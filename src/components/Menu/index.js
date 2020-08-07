import React from 'react';
import Logo from '../../assets/img/logo.svg';
import './style.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Reactflix logo" />
      </a>
    </nav>
  );
}

export default Menu;