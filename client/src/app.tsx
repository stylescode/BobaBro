import { useState, useEffect } from "react";
import React from 'react';
import Header from './header';
import Home from './home/home';
import Business from './business/business';
import Profile from './profile/profile';

const App = () => {

  type Page = 'home' | 'business' | 'profile';
  const [currentPage, setCurrentPage] = useState('home');

  const changePage = (page: Page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'business':
        return <Business />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  }

  return (
    <div id="app-container">
      <Header changePage={changePage} />
      {renderPage()}
    </div>
  );
};

export default App;