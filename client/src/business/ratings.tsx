import React from 'react';
import RatingCategory from './ratingCategory';

interface RatingsProps {
  shop: {};
}

const Ratings = ({ shop }: RatingsProps) => {

  console.log('from ratings page:', shop);
  return (
    <div id="ratings-component">
      <RatingCategory cat={"Boba Texture"} rating={3.5}/>
      <RatingCategory cat={"Flavor"} rating={4.5}/>
      <RatingCategory cat={"Drink Variety"} rating={5}/>
    </div>
  );
}

export default Ratings;