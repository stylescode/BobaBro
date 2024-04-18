import React, { useEffect, useState } from 'react';
import Ratings from './ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';

import './business.css';

interface BusinessProps {
  shop: {};
}

const Business = ({ shop }: BusinessProps) => {

  const [fav, setFav] = useState(false);

  useEffect(() => {
    const shops = localStorage.getItem('favShops');
    if (shops) {
      const favShops = JSON.parse(shops);
      const isFav = favShops.some((place: any) => place.place_id === shop.place_id);
      setFav(isFav);
    }
  }, []);

  const toggleFav = () => {
    if (fav) {
      let shops = localStorage.getItem('favShops');
      if (shops) {
        shops = JSON.parse(shops);
        shops = shops.filter((place: any) => place.place_id !== shop.place_id);
        localStorage.setItem('favShops', JSON.stringify(shops));
      }
    } else {
      let shops = localStorage.getItem('favShops');
      if (shops) {
        shops = JSON.parse(shops);
        shops.push(shop);
        localStorage.setItem('favShops', JSON.stringify(shops));
      } else {
        localStorage.setItem('favShops', JSON.stringify([shop]));
      }
    }
    setFav(!fav);
  }

  console.log('from business page:', shop);
  return (
    <div id="business-page">
      <div className="topSection">
        <div className="namePhoto">
          <div>{shop.name}</div>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg" alt="no image available" className="pagePhoto"/>
        </div>
        <div className="ratingSection">
          {fav ? <FontAwesomeIcon
                    icon={faSolidHeart}
                    className="icon fav"
                    onClick={toggleFav}
                  /> : <FontAwesomeIcon
                          icon={faHeart}
                          className="icon notFav"
                          onClick={toggleFav}/> }
          <div>Ratings - 41</div>
          <Ratings shop={shop}/>
        </div>
      </div>
      <p className="address">{shop.vicinity}</p>
    </div>
  );
}

export default Business;