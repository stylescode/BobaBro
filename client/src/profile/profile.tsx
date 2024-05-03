import React, { useEffect, useState } from 'react';
import BusinessList from '../home/businessList';
import './profile.css';

interface ProfileProps {
  changePage: Function;
}

const Profile = ({ changePage } : ProfileProps) => {

  const [favShops, setFavShops] = useState([]);

  useEffect(() => {
    const shops = localStorage.getItem('favShops');
    if (shops) {
      setFavShops(JSON.parse(shops));
    }
  }, []);

  return (
    <div id="profile-container">
      <img className="profile-image" src="https://img.freepik.com/free-vector/bubble-tea-sticker-illustrated-blue-background-vector_53876-165070.jpg?w=826&t=st=1712250908~exp=1712251508~hmac=4dd736de2b7518e72fd57baed574f8298f3dab2d6abf49ec3e274e610b0c2170" alt="profile" />
      <div>TeaDude99</div>
      <div>Favorite Flavors:</div>
      <div>Favorite Shops:</div>
      <BusinessList bobaShops={favShops} changePage={changePage}/>
      <div>TeaDude99's Ratings</div>
    </div>
  );
}

export default Profile;