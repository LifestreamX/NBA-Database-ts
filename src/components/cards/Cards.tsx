import React, { useEffect, useState } from 'react';
import SearchPlayer from '../search/SearchPlayer';
import Card from './card/Card';
// import Card, { getPlayers } from './card/Card';
import { useQuery } from 'react-query';

import './Cards.scss';

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
      `https://free-nba.p.rapidapi.com/players?page=${pageNumber}&per_page=9`,
      options
    )
  ).json();

const Cards: React.FC = () => {
  const [players, setPlayers] = useState([] as PlayerType[]);
  const [pageNumber, setPageNumber] = useState(1);

  // Filter state
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const { data, isLoading, error } = useQuery<any>(
    ['players', pageNumber],
    () => getPlayers(pageNumber)
  );

  useEffect(() => {
    setPlayers(data?.data);
  });

  // Function to set page number to number thats clicked for pagination
  const handleChange = (e: any, p: any) => {
    console.log(e, p);
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

  return (
    <main>
      <SearchPlayer
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        SearchPlayers={SearchPlayers}
      />
      <Card
        searchInput={searchInput}
        filteredResults={filteredResults}
        players={players}
        handleChange={handleChange}
      />
    </main>
  );
};

export default Cards;
