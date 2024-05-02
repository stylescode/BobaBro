import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './search';
import BusinessList from './businessList';
import './home.css';

interface HomeProps {
  changePage: Function;
}

const Home = ({ changePage }: HomeProps) => {

  const [location, setLocation] = useState({ lat: 33.64552, lng: -117.84156 });
  const [bobaShops, setBobaShops] = useState([]);

  useEffect(() => {
    axios.get('/shops', {
      params: {
        location: location,
        keyword: 'boba bubble tea milk tea'
      }})
      .then((response) => {
        setBobaShops(response.data.results);
      });
  }, [location]);

  function changeLocation(newLocation: string) {
    axios.get('/geocode', { params: { newLocation }})
      .then((response) => {
        setLocation(response.data.results[0].geometry.location);
      });
  }

  return (
    <div id="home-page">
      <Search changeLocation={changeLocation}/>
      LOCATIONS:
      <BusinessList bobaShops={bobaShops} changePage={changePage}/>
    </div>
  );
}

export default Home;