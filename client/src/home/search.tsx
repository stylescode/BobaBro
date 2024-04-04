import React, { useState } from 'react';

interface SearchProps {
  changeLocation: Function;
}

const Search = ({ changeLocation }: SearchProps) => {

  const [input, setInput] = useState('');

  return (
    <div id="search-container">
      <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter a location..."/>
      <button onClick={() => changeLocation(input)}>Search</button>
    </div>
  );
}

export default Search;