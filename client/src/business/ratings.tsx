import React from 'react';
import RatingCategory from './ratingCategory';
import './ratings.css';

interface RatingsProps {
  shop: {};
}

const Ratings = ({ shop }: RatingsProps) => {

  console.log('from ratings page:', shop);
  return (
    <div id="ratings-component">
      <RatingCategory cat={"BOBA"} rating={3.5}/>
      <RatingCategory cat={"TEA"} rating={4.5}/>
      <RatingCategory cat={"VARIETY"} rating={5}/>
    </div>
  );
}

export default Ratings;