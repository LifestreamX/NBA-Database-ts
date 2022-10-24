import React from 'react';
import './SearchPlayer.scss';
import SearchIcon from '@mui/icons-material/Search';

const SearchPlayer = () => {
  return (
    <div className='search'>
      <SearchIcon className='search-icon' />
      <input
        className='filter-input'
        type='text'
        // onChange={(e) => setFilteredGroceries(e.target.value)}
        placeholder='Search Player...'
      />
    </div>
  );
};

export default SearchPlayer;
