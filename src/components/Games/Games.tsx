import React, { useState } from 'react';
import { GameType } from '../../types/Players.types';
import Game from './game/Game';
import '../Search.scss';

// API LOGIC
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cb7dfb7b40msh9a3b45b655e8effp17b293jsna42fa502c4b0',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
  },
};

export const getGames = async (pageNumber: any): Promise<GameType> =>
  await (
    await fetch(
      `https://free-nba.p.rapidapi.com/games?page=${pageNumber}per_page=20}`,
      options
    )
  ).json();

  



const Games = () => {
 
  const [pageNumber, setPageNumber] = useState<any>();


  // Function to set page number to number thats clicked for pagination
  const handleChange = (e: any, p: number) => {
    // console.log(e, p);
    setPageNumber(p);
    console.log(p);
  };

  return (
    <main>  
      <main className='card-component-wrapper'>
        <Game pageNumber={pageNumber} handleChange={handleChange} />
      </main>
    </main>
  );
};

export default Games;
