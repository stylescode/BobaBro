import { useState, useEffect } from "react";
import React from 'react';
import Header from './header';
import Home from './home/home';
import Business from './business/business';
import Profile from './profile/profile';
import './app.css';

const App = () => {

  type Page = 'home' | 'business' | 'profile';
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedShop, setSelectedShop] = useState({});
  const [user, setUser] = useState({});

  const changePage = (page: Page, shop?: {}) => {
    console.log('single shop:', shop);
    setCurrentPage(page);
    if (shop) {
      setSelectedShop(shop);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home changePage={changePage}/>;
      case 'business':
        return <Business shop={selectedShop}/>;
      case 'profile':
        return <Profile changePage={changePage}/>;
      default:
        return <Home changePage={changePage}/>;
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