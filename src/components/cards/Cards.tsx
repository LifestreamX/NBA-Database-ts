import React, { useEffect, useState } from 'react';
import SearchPlayer from '../search/SearchPlayer';
import Card from './card/Card';
// import Card, { getPlayers } from './card/Card';
import { useQuery } from 'react-query';

import './Cards.scss';
import SearchAllPlayers from '../searchAllPlayers/SearchAllPlayers';
import SortMenu from '../sortmenu/SortMenu';
import Basketball from '../basketball/Basketball';

// TYPES SECTION
export type PlayerType = {
  first_name: string;
  height_feet: number;
  height_inches: number;
  id: number;
  last_name: string;
  position: string;
  weight_pounds: number;
  team: any;
};

export type dataType = {
  data: any;
};

// type Props = {
//   searchInput: any;
//   filteredResults: any;
// };

// API LOGIC
const options = {
  method: 'GET',
  params: { page: '1', per_page: '25' },

  headers: {
    'X-RapidAPI-Key': 'cb7dfb7b40msh9a3b45b655e8effp17b293jsna42fa502c4b0',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
  },
};

export const getPlayers = async (pageNumber: any): Promise<dataType> =>
  await (
    await fetch(
      `https://free-nba.p.rapidapi.com/players?page=${pageNumber}&per_page=6`,
      options
    )
  ).json();

const Cards: React.FC = () => {
  // const [players, setPlayers] = useState([] as PlayerType[]);
  const [pageNumber, setPageNumber] = useState(1);

  // Filter state
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  // Filter all state
  const [searchAllValue, setSearchAllValue] = useState('');
  const [filteredAllResults, setFilteredAllResults] = useState('');

  // Sort State
  const [sortedData, setSortedData] = useState(false);

  const { data, isLoading, error } = useQuery<any>(
    ['players', pageNumber],
    () => getPlayers(pageNumber)
  );

  // Function to set page number to number thats clicked for pagination
  const handleChange = (e: any, p: any) => {
    // console.log(e, p);
    setPageNumber(p);
  };

  // FILTER LOGIC FOR CURRENT PAGE
  const SearchPlayers = (searchValue: string) => {
    setSearchInput(searchValue);

    if (searchInput !== '') {
      const filteredData = data?.data?.filter((player: any) => {
        return (
          player.first_name.toLowerCase().includes(searchInput.toLowerCase()) ||
          player.last_name.toLowerCase().includes(searchInput.toLowerCase())
        );
      });

      setFilteredResults(filteredData);
      console.log(filteredResults);
    } else setFilteredResults(data?.data);
  };

  // Sort players on current page by first name
  const handleSortByFirstName = () => {
    setSortedData(!sortedData);
    data?.data.sort(function (a: any, b: any) {
      var nameA = a.first_name.toLowerCase(),
        nameB = b.first_name.toLowerCase();
      if (nameA < nameB)
        //sort string ascending
        return -1;
      if (nameA > nameB) return 1;
      return 0; //default return value (no sorting)
    });
    return;
  };

  // Sort players on current page by last name
  const handleSortByLastName = () => {
    setSortedData(!sortedData);
    data?.data.sort(function (a: any, b: any) {
      var nameA = a.last_name.toLowerCase(),
        nameB = b.last_name.toLowerCase();
      if (nameA < nameB)
        //sort string ascending
        return -1;
      if (nameA > nameB) return 1;
      return 0; //default return value (no sorting)
    });
    return;
  };

  return (
    <main>
      <SortMenu
        handleSortByFirstName={handleSortByFirstName}
        handleSortByLastName={handleSortByLastName}
      />
      <SearchPlayer
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        SearchPlayers={SearchPlayers}
      />
      <SearchAllPlayers
        searchAllValue={searchAllValue}
        setSearchAllValue={setSearchAllValue}
        // searchingForAllPlayers={searchingForAllPlayers}
        setFilteredAllResults={setFilteredAllResults}
        filteredAllResults={filteredAllResults}
      />

      <main className='card-component-wrapper'>
        <Card
          pageNumber={pageNumber}
          searchInput={searchInput}
          filteredResults={filteredResults}
          // players={players}
          handleChange={handleChange}
          filteredAllResults={filteredAllResults}
        />
      </main>
    </main>
  );
};

export default Cards;
