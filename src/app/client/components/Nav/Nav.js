import React from 'react';
import { Link } from 'react-router-dom';
import stylesNav from './Nav.css';
import logoMarvel from '../../images/MarvelLogo.png';

const Nav = () => (
  <div className={stylesNav.navContainer} >
    <Link to="/" >
      <img className={stylesNav.imageLogo} alt="Marvelzon" src={logoMarvel} />
    </Link>
  </div>
);

export default Nav;
