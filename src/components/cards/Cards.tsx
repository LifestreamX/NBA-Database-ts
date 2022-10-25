import React, { useState } from 'react';
import SearchPlayer from '../search/SearchPlayer';
import Card, { getPlayers } from './card/Card';
import { useQuery } from 'react-query';

import './Cards.scss';

const Cards = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, error } = useQuery<any>(['players'], () =>
    getPlayers(pageNumber)
  );

  // console.log(data.data);

  // Filter player state
  const [searchInput, setSearchInput] = useState('');

  const [filteredResults, setFilteredResults] = useState([]);

  // Search
  const SearchPlayers = (searchValue: string) => {
    setSearchInput(searchValue);

    if (searchInput !== '') {
      const filteredData = data?.data?.filter((player: any) => {
        // console.log(Object.values(player).indexOf('first_name'));

        return player.first_name
          .toLowerCase()
          .includes(searchInput.toLowerCase());

        // console.log(Object.values(player))
        // return Object.values(player)
        //   .join('')
        //   .toLowerCase()
        //   .includes(searchInput.toLowerCase());
      });

      setFilteredResults(filteredData);
      console.log(filteredResults);
    } else setFilteredResults(data?.data);
  };

  // console.log(filteredResults);

  return (
    <main>
      <SearchPlayer
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        SearchPlayers={SearchPlayers}
      />
      <Card searchInput={searchInput} filteredResults={filteredResults} />
    </main>
  );
};

export default Cards;
