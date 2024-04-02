import { useState, useEffect } from "react";
import React from 'react';
import Header from './header';
import Main from './main/main';
import Business from './business/business';
import Profile from './profile/profile';

const App: React.FC = () => {




  return (
    <div id="app-container">
      <Header />
      <Main />
      <Business />
      <Profile />
    </div>
  );
};

export default App;