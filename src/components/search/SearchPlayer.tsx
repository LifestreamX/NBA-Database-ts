import React from 'react';
import './SearchPlayer.scss';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  searchInput: string;
  setSearchInput: (val: string) => void;
  SearchPlayers: (val: any) => void;
};

const SearchPlayer: React.FC<Props> = ({
  searchInput,
  setSearchInput,
  SearchPlayers,
}) => {
  return (
    <div className='search'>
      <SearchIcon className='search-icon' />
      <input
        className='filter-input'
        type='text'
        onChange={(e) => SearchPlayers(e.target.value)}
        placeholder='Search Player...'
      />
    </div>
  );
};

export default SearchPlayer;
