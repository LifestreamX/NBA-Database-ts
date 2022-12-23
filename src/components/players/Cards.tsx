import React, { useState } from 'react';
import SearchAllPlayers from '../searchAllPlayers/SearchAllPlayers';
import { PlayerType } from '../../types/Players.types';
import Card from './player/Card';

const Cards: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);

 

  // Filter all state
  const [searchAllValue, setSearchAllValue] = useState<string>('');
  const [filteredAllResults, setFilteredAllResults] = useState<PlayerType>();

  // Function to set page number to number thats clicked for pagination
  const handleChange = (e: any, p: number) => {
    setPageNumber(p);
    console.log(p);
  };

  return (
    <main>
   
        <>
          <SearchAllPlayers
            searchAllValue={searchAllValue}
            setSearchAllValue={setSearchAllValue}
            setFilteredAllResults={setFilteredAllResults}
            filteredAllResults={filteredAllResults}
            pageNumber={pageNumber}
          />

          <main className='card-component-wrapper'>
            <Card
              pageNumber={pageNumber}
              handleChange={handleChange}
              filteredAllResults={filteredAllResults}
            />
          </main>
        </>
    
    </main>
  );
};

export default Cards;
