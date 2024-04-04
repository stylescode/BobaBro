import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  changePage: Function;
}
const Header = ({ changePage }: HeaderProps) => {

  return (
    <div id="header">
      <h1 onClick={() => changePage('home')}>BobaBro</h1>
      <FontAwesomeIcon icon={faUser} onClick={() => changePage('profile')} />
    </div>
  );
}

export default Header;