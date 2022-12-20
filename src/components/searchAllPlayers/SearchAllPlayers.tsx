import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import './SearchAllPlayers.scss';
import Alert from '@mui/material/Alert';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import Basketball from '../basketball/Basketball';
import { getFilteredPlayers } from '../players/Cards';

type Props = {
  searchAllValue: any;
  setFilteredAllResults: any;
  setSearchAllValue: any;
  filteredAllResults: any;
  pageNumber: number;
  setTotalPages: any;
  setFilteredTotalPages: any;
  filterPageNumber: any;
};

export type dataType = {
  filterData: any;
};

// API LOGIC
const options = {
  method: 'GET',
  params: { page: '1', per_page: '25' },

  headers: {
    'X-RapidAPI-Key': 'cb7dfb7b40msh9a3b45b655e8effp17b293jsna42fa502c4b0',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
  },
};

const SearchAllPlayers: React.FC<Props> = ({
  //   searchingForAllPlayers,
  searchAllValue,
  setFilteredAllResults,
  setSearchAllValue,
  filteredAllResults,
  setFilteredTotalPages,
  filterPageNumber,
}) => {
  const { data, refetch } = useQuery(
    ['filteredplayers', filterPageNumber, searchAllValue],
    () => getFilteredPlayers(filterPageNumber, searchAllValue),
    { enabled: false }
  );

  setFilteredAllResults(data);

  setFilteredTotalPages(data?.meta?.total_pages);

  const handlePlayerSearch = (e: any) => {
  };

  // Styles for button if no input has been types
  const styles: any = {
    disableTheme: {
      background: !searchAllValue && '#105c889d',
    },
  };

  // Handle reset
  const handleReset = () => {
    setFilteredAllResults({});
  };

  return (
    <div className='search-all'>
      <div className='left-ball'>
        <Basketball />
      </div>
      <form className='search-all-wrapper'>
        <div className='section-wrapper'>
          {/* If there is no match for all users */}
          {filteredAllResults?.data?.length === 0 && filteredAllResults && (
            <Alert className='warning' variant='filled' severity='warning'>
              Not A Match, Try again
            </Alert>
          )}

          <div className='input-label-wrapper'>
            <label htmlFor='' className='label-name'>
              Name:
            </label>
            <input
              required
              type='text'
              className='label-input'
              onChange={(e) => setSearchAllValue(e.target.value)}
            />
          </div>

          <button
            style={styles.disableTheme}
            disabled={!searchAllValue}
            onClick={(e) => {
              e.preventDefault();
              refetch();
              handlePlayerSearch(e);
            }}
            className='search-all-button'
          >
            Search
          </button>
          <button className='search-all-button' onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
      <div className='right-ball'>
        <Basketball />
      </div>
    </div>
  );
};

export default SearchAllPlayers;
