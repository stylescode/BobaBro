import React, { useEffect } from 'react';

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
          <div key={index} className="listItem" onClick={() => changePage(shop)}>
            <h3>{shop.name}</h3>
            <p>{shop.vicinity}</p>
          </div>
        );
      });
    }
  }

  return (
    <div id="business-list">
      BUSINESS LIST
      {renderShops()}
    </div>
  );
}

export default BusinessList;