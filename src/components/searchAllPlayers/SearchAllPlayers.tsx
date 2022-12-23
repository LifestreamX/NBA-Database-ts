import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import '.././Search.scss';
import Alert from '@mui/material/Alert';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import Basketball from '../basketball/Basketball';
import { getFilteredPlayers } from '../API';

type Props = {
  searchAllValue: string;
  setSearchAllValue: any;
  setFilteredAllResults: any;
  filteredAllResults: any;
  pageNumber: number;
};



const SearchAllPlayers: React.FC<Props> = ({
  searchAllValue,
  setFilteredAllResults,
  setSearchAllValue,
  filteredAllResults,
}) => {

  


  const { data, refetch } = useQuery(
    ['filteredplayers', searchAllValue],
    () => getFilteredPlayers(searchAllValue),
    { enabled: false }
  );

  setFilteredAllResults(data);


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
