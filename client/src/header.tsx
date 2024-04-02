import React from 'react';

interface HeaderProps {
  changePage: Function;
}
const Header = ({ changePage }: HeaderProps) => {

  return (
    <div id="header">
      <h1 onClick={() => changePage('home')}>BobaBro</h1>
      <div onClick={() => changePage('profile')}>PROFILE ICON</div>
    </div>
  );
}

export default Header;