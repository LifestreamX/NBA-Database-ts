import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import './SearchAllPlayers.scss';

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
    let comparedData;

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


    // console.log(filteredAllResults);

    //   Compares the search input for first name or last name to the data base for exact name match
    // const comparedData = filterData?.filter((player: any) => {
    //   return (
    //     player.first_name.toLowerCase() ===
    //       searchAllValue.toLowerCase().replace(/\s/g, '') ||
    //     player.last_name.toLowerCase() ===
    //       searchAllValue.toLowerCase().replace(/\s/g, '') ||
    //     player.first_name.toLowerCase() + player.last_name.toLowerCase() ==
    //       searchAllValue.toLowerCase().replace(/\s/g, '')
    //   );
    // });
    // setFilteredAllResults(filterData);
  };

  return (
    <form className='search-all-wrapper'>
      <div className='section-wrapper'>
        <h1 className='search-all-title'>Search All Players</h1>
        <div className='input-label-wrapper'>
          <label htmlFor='' className='label-name'>
            Name:
          </label>
          <input
            type='text'
            className='label-input'
            onChange={(e) => setSearchAllValue(e.target.value)}
          />
        </div>

        <button onClick={HandlePlayerSearch} className='search-all-button'>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchAllPlayers;
