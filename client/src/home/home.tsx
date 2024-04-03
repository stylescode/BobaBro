import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './search';
import BusinessList from './businessList';

declare var google: any;

interface HomeProps {
  changePage: Function;
}

const Home = ({ changePage }: HomeProps) => {

  const [bobaShops, setBobaShops] = useState([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ-NH550YmgcvXuEu4UImnGeBRYiS2jzw&libraries=places`;
    script.onload = () => {
      initMap();
    }
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    }
  }, []);

  function initMap() {
    const service = new google.maps.places.PlacesService(document.createElement('div'));

    const searchParams = {
      location: { lat: 33.63875, lng: -117.68577},
      rankBy: google.maps.places.RankBy.DISTANCE,
      keyword: "boba bubble tea milk tea"
    }

    service.nearbySearch(searchParams, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        setBobaShops(results);
      }
    });
  }

  return (
    <div id="home-page">
      <Search />
      <BusinessList bobaShops={bobaShops} changePage={changePage}/>
    </div>
  );
}

export default Home;