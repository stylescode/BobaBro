import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import './header.css';

interface HeaderProps {
  changePage: Function;
}
const Header = ({ changePage }: HeaderProps) => {

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        setMenuOpen(!menuOpen);
      });
    }
  }, [menuOpen]);

  const burgerFunc = () => {
    if (menuOpen) {
      console.log('haha');
      return (
        <div className="menu">
          <div className="menu-item" onClick={() => changePage('home')}>Home</div>
          <div className="menu-item" onClick={() => changePage('profile')}>Profile</div>
        </div>
      );
    }
  }

  return (
    <div id="header">
      <FontAwesomeIcon icon={faBars} className="header-icon"/>
      <h1 onClick={() => changePage('home')}>
        BobaBr
        <FontAwesomeIcon icon={faCircle} />
      </h1>
      <FontAwesomeIcon icon={faUser} className="header-icon" onClick={() => changePage('profile')} />
      {burgerFunc()}
    </div>
  );
}

export default Header;