import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Nav from './components/Nav/Nav';
import { useQuery } from 'react-query';
import Spinner from './components/Nav/spinner/Spinner';



// import { PlayerType } from './types/Players.types';

export type PlayerType = {
  first_name: string;
  height_feet: number;
  height_inches: number;
  id: number;
  last_name: string;
  position: string;
  weight_pounds: number;
};

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cb7dfb7b40msh9a3b45b655e8effp17b293jsna42fa502c4b0',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
  },
};

const getPlayers = async (): Promise<PlayerType[]> =>
  await (
    await fetch(
      'https://free-nba.p.rapidapi.com/players?page=0&per_page=25',
      options
    )
  ).json();

const App = () => {
  const { data, isLoading, error } = useQuery<PlayerType[]>(
    ['players'],
    getPlayers
  );
  console.log(data);
  console.log(isLoading);

  return (
    <div className='App'>
      <Nav />
      {!isLoading && (
        <div className='spinner-wrapper'>
          <Spinner />
        </div>
      )}

    </div>
  );
};

export default App;
