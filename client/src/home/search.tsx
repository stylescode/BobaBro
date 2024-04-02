import React from 'react';

interface SearchProps {

}

const Search = ({}: SearchProps) => {
  return (
    <div id="search-container">
      <input type="text" placeholder="Search for boba places..."/>
      <button>Search</button>
    </div>
  );
}

export default Search;