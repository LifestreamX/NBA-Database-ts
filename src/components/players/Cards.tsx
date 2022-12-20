import React, { useEffect, useState, useCallback } from 'react';
import SearchPlayer from '../search/SearchPlayer';
// import Card, { getPlayers } from './card/Card';
import { useQuery } from 'react-query';
import SearchAllPlayers from '../searchAllPlayers/SearchAllPlayers';
import SortMenu from '../sortmenu/SortMenu';
import { PlayerType } from '../../types/Players.types';
import Card from './player/Card';
import '../Cards.scss';

// API LOGIC
const options = {
  method: 'GET',
  params: { page: '1', per_page: '25' },

  headers: {
    'X-RapidAPI-Key': 'cb7dfb7b40msh9a3b45b655e8effp17b293jsna42fa502c4b0',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
  },
};

export const getPlayers = async (pageNumber: any): Promise<PlayerType> =>
  await (
    await fetch(
      `https://free-nba.p.rapidapi.com/players?page=${pageNumber}&per_page=20`,
      options
    )
  ).json();

export const getFilteredPlayers = async (
  filterPageNumber: any,
  searchAllValue: any
): Promise<PlayerType> =>
  await (
    await fetch(
      `https://free-nba.p.rapidapi.com/players?page=${filterPageNumber}&per_page=100&search=${searchAllValue}`,
      options
    )
  ).json();

const Cards: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<any>();

  // Filter state
  const [searchInput, setSearchInput] = useState<string>('');
  const [filteredResults, setFilteredResults] = useState<Array<object>>();

  // Filter all state
  const [searchAllValue, setSearchAllValue] = useState<string>('');
  const [filteredAllResults, setFilteredAllResults] = useState<PlayerType>();

  console.log(filteredAllResults);

  // Sort State
  const [sortedData, setSortedData] = useState<boolean>(false);

  // Pagination pages
  const [totalPages, setTotalPages] = useState<any>();

  // Filter Pagination
  const [filteredTotalPages, setFilteredTotalPages] = useState();

  const [filterPageNumber, setFilterPageNumber] = useState<any>();

  const { data, isLoading, error } = useQuery(['players', pageNumber], () =>
    getPlayers(pageNumber)
  );

  useEffect(() => {
    setTotalPages(data?.meta?.total_pages);
  }, [data?.meta?.total_pages]);

  // const PlayerData: Array<PlayerType> = data?.data;

  // Function to set page number to number thats clicked for pagination
  const handleChange = (e: any, p: number) => {
    // console.log(e, p);
    setPageNumber(p);
    console.log(p);
  };

  const handleFilterChange = (e: any, p: number) => {
    setFilterPageNumber(p);
    console.log(p);
  };

  // const handleSortByFirstName = () => {
  //   setSortedData(!sortedData);
  //   PlayerData.sort(function (a: any, b: any) {
  //     var nameA: string = a.first_name.toLowerCase(),
  //       nameB: string = b.first_name.toLowerCase();
  //     if (nameA < nameB)
  //       //sort string ascending
  //       return -1;
  //     if (nameA > nameB) return 1;
  //     return 0; //default return value (no sorting)
  //   });
  //   return;
  // };

  // const handleSortByLastName = () => {
  //   setSortedData(!sortedData);
  //   PlayerData.sort(function (a: any, b: any) {
  //     var nameA: string = a.last_name.toLowerCase(),
  //       nameB: string = b.last_name.toLowerCase();
  //     if (nameA < nameB)
  //       //sort string ascending
  //       return -1;
  //     if (nameA > nameB) return 1;
  //     return 0; //default return value (no sorting)
  //   });
  //   return;
  // };

  // console.log(filteredTotalPages);

  return (
    <main>
      {/* <SortMenu
        handleSortByFirstName={handleSortByFirstName}
        handleSortByLastName={handleSortByLastName}
      /> */}
      {/* <SearchPlayer
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        SearchPlayers={SearchPlayers}
      /> */}

      <SearchAllPlayers
        searchAllValue={searchAllValue}
        setSearchAllValue={setSearchAllValue}
        // searchingForAllPlayers={searchingForAllPlayers}
        setFilteredAllResults={setFilteredAllResults}
        filteredAllResults={filteredAllResults}
        pageNumber={pageNumber}
        setTotalPages={setTotalPages}
        setFilteredTotalPages={setFilteredTotalPages}
        filterPageNumber={filterPageNumber}
      />

      <main className='card-component-wrapper'>
        <Card
          pageNumber={pageNumber}
          searchInput={searchInput}
          filteredResults={filteredResults}
          // players={players}
          handleChange={handleChange}
          filteredAllResults={filteredAllResults}
          totalPages={totalPages}
          filteredTotalPages={filteredTotalPages}
          handleFilterChange={handleFilterChange}
        />
      </main>
    </main>
  );
};

export default Cards;
