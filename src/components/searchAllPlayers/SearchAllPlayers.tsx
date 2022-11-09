import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import './SearchAllPlayers.scss';
import Alert from '@mui/material/Alert';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import Basketball from '../basketball/Basketball';

type Props = {
  //   searchingForAllPlayers: (val: any) => void;
  searchAllValue: any;
  setFilteredAllResults: any;
  setSearchAllValue: any;
  filteredAllResults: any;
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
}) => {
  let [filterData, setFilterData] = useState<any>();

  //   When Search Button is clicked
  const HandlePlayerSearch = (e: any) => {
    e.preventDefault();

    fetch(
      `https://free-nba.p.rapidapi.com/players?page=0&search=${searchAllValue}`,
      options
    )
      .then((response) => response.json())
      .then((response) =>
        setFilteredAllResults(
          response.data.filter((player: any) => {
            return (
              player.first_name.toLowerCase() ===
                searchAllValue.toLowerCase().replace(/\s/g, '') ||
              player.last_name.toLowerCase() ===
                searchAllValue.toLowerCase().replace(/\s/g, '') ||
              player.first_name.toLowerCase() +
                player.last_name.toLowerCase() ==
                searchAllValue.toLowerCase().replace(/\s/g, '')
            );
          })
        )
      )
      .catch((err) => console.error(err));
  };

  const styles: any = {
    disableTheme: {
      background: !searchAllValue && '#105c889d',
    },
  };

  return (
    <main className='search-all'>
      <div className='left-ball'>
        <Basketball />
      </div>
      <form className='search-all-wrapper'>
        <div className='section-wrapper'>
          <h1 className='search-all-title'>SEARCH ALL PLAYERS</h1>
          {/* If there is no match for all users */}
          {filteredAllResults.length < 1 && filteredAllResults && (
            <Alert className='warning' variant='filled' severity='warning'>
              Not A Match, Try again
            </Alert>
          )}

          {/* {filteredAllResults.length === 0 && console.log('Please Enter naame')} */}
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
            onClick={HandlePlayerSearch}
            // disabled={searchAllValue == 0}
            className='search-all-button'
          >
            Search
          </button>
        </div>
      </form>
      <div className='right-ball'>
        <Basketball />
      </div>
    </main>
  );
};

export default SearchAllPlayers;
