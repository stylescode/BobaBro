import React from 'react';

interface RatingCategoryProps {
  cat: string,
  rating: number
}

const RatingCategory = ({ cat, rating }: RatingCategoryProps) => {

  return (
    <div id="rating-category">
      <div>{cat}</div>
      <div>{rating}</div>
    </div>
  );
}

export default RatingCategory;