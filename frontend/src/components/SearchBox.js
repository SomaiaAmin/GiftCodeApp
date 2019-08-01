import React from 'react';

import SearchLogo from 'react-ionicons/lib/IosSearch'

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2' style={{alignItems: 'center', width: 200, display: 'flex'}}>
      <SearchLogo />
      <input
        className='form-control'
        type='search'
        placeholder='Search'
        onChange={searchChange}
        />
    </div>
  );
}

export default SearchBox;

const searchBoxStyle = {
    alignItems: 'center'
};
