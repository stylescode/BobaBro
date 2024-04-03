import React, { useEffect, useState } from 'react';
import axios, { HttpStatusCode } from 'axios';
import Search from './search';
import BusinessList from './businessList';

declare var google: any;

interface HomeProps {
  changePage: Function;
}

const Home = ({ changePage }: HomeProps) => {

  const [location, setLocation] = useState({ lat: 33.63875, lng: -117.68577 });
  const [bobaShops, setBobaShops] = useState([]);

  useEffect(() => {
    const script: HTMLScriptElement = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ-NH550YmgcvXuEu4UImnGeBRYiS2jzw&libraries=places`;
    script.onload = () => {
      initMap();
    }
    document.head.appendChild(script);
    return () => {
      console.log('unmounting', script);
      document.head.removeChild(script);
    }
  }, [location]);

  function initMap() {
    const service = new google.maps.places.PlacesService(document.createElement('div'));

    const searchParams = {
      location: location,
      rankBy: google.maps.places.RankBy.DISTANCE,
      keyword: "boba bubble tea milk tea"
    }

    service.nearbySearch(searchParams, (results: any, status: HttpStatusCode) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        setBobaShops(results);
      }
    });
  }

  function changeLocation(newLocation: any) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: newLocation }, (results: any, status: HttpStatusCode) => {
      if (status === google.maps.GeocoderStatus.OK) {
        newLocation = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        }
        console.log(newLocation);
        setLocation(newLocation);
      }
    });
  }

  return (
    <div id="home-page">
      <Search changeLocation={changeLocation}/>
      <BusinessList bobaShops={bobaShops} changePage={changePage}/>
    </div>
  );
}

export default Home;