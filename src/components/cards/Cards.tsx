import React, { useEffect, useState } from 'react';
import SearchPlayer from '../search/SearchPlayer';
import Card from './card/Card';
// import Card, { getPlayers } from './card/Card';
import { useQuery } from 'react-query';
import './Cards.scss';
import SearchAllPlayers from '../searchAllPlayers/SearchAllPlayers';
import SortMenu from '../sortmenu/SortMenu';
import Basketball from '../basketball/Basketball';
import { PlayerType } from '../../types/Players.types';

// API LOGIC
const options = {
  method: 'GET',
  params: { page: '1', per_page: '25' },

  headers: {
    'X-RapidAPI-Key': 'cb7dfb7b40msh9a3b45b655e8effp17b293jsna42fa502c4b0',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
  },
};

export const getPlayers = async (pageNumber: any): Promise<any> =>
  await (
    await fetch(
      `https://free-nba.p.rapidapi.com/players?page=${pageNumber}&per_page=6`,
      options
    )
  ).json();

const Cards: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  // Filter state
  const [searchInput, setSearchInput] = useState<string>('');
  const [filteredResults, setFilteredResults] = useState<Array<object>>();

  // Filter all state
  const [searchAllValue, setSearchAllValue] = useState<string>('');
  const [filteredAllResults, setFilteredAllResults] = useState<string>('');


  // Sort State
  const [sortedData, setSortedData] = useState<boolean>(false);
  const { data, isLoading, error } = useQuery(['players', pageNumber], () =>
    getPlayers(pageNumber)
  );

  const PlayerData: Array<PlayerType> = data?.data;

  // Function to set page number to number thats clicked for pagination
  const handleChange = (e: any, p: number) => {
    // console.log(e, p);
    setPageNumber(p);
  };

  // FILTER LOGIC FOR CURRENT PAGE
  const SearchPlayers = (searchValue: string) => {
    setSearchInput(searchValue);

    if (searchInput !== '') {
      const filteredData = PlayerData.filter((player: any) => {
        return (
          player.first_name.toLowerCase().includes(searchInput.toLowerCase()) ||
          player.last_name.toLowerCase().includes(searchInput.toLowerCase())
        );
      });

      setFilteredResults(filteredData);

      console.log(filteredResults);
    } else setFilteredResults(PlayerData);
  };

  // Sort players on current page by first name
  const handleSortByFirstName = () => {
    setSortedData(!sortedData);
    PlayerData.sort(function (a: any, b: any) {
      var nameA: string = a.first_name.toLowerCase(),
        nameB: string = b.first_name.toLowerCase();
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
    PlayerData.sort(function (a: any, b: any) {
      var nameA: string = a.last_name.toLowerCase(),
        nameB: string = b.last_name.toLowerCase();
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

      {!isLoading && (
        <SearchAllPlayers
          searchAllValue={searchAllValue}
          setSearchAllValue={setSearchAllValue}
          // searchingForAllPlayers={searchingForAllPlayers}
          setFilteredAllResults={setFilteredAllResults}
          filteredAllResults={filteredAllResults}
        />
      )}

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
