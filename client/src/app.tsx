import { useState, useEffect } from "react";
import React from 'react';
import Header from './header';
import Main from './main/main';
import Business from './business/business';
import Profile from './profile/profile';

const App: React.FC = () => {

  type Page = 'main' | 'business' | 'profile';
  const [currentPage, setCurrentPage] = useState('main');

  const changePage = (page: Page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'main':
        return <Main />;
      case 'business':
        return <Business changePage={changePage} />;
      case 'profile':
        return <Profile />;
      default:
        return <Main />;
    }
  }

  return (
    <div id="app-container">
      <Header />
      {renderPage()}
    </div>
  );
};

export default App;