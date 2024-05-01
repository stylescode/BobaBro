import React, { useEffect } from 'react';
import './businessList.css';

interface BusinessListProps {
  bobaShops: any[];
  changePage: Function;
}

const BusinessList = ({ bobaShops, changePage }: BusinessListProps) => {

  useEffect(() => {
    console.log('list:', bobaShops);
  }, [bobaShops]);

  const renderShops = () => {
    if (bobaShops === undefined || bobaShops.length === 0) {
      <div>No boba shops found</div>
    } else {
      return bobaShops.map((shop, index) => {
        return (
          <div key={index} className="listItem" onClick={() => changePage('business', bobaShops[index])}>
            <div className="itemInfo">
              <h3>{shop.name}</h3>
              <p>{shop.vicinity}</p>
            </div>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg" alt="no image available" className="itemKeyPhoto"/>
          </div>
        );
      });
    }
  }

  return (
    <div id="business-list">
      {renderShops()}
    </div>
  );
}

export default BusinessList;