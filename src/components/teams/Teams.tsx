import React, { useEffect, useState, useCallback } from 'react';
import { useQuery } from 'react-query';
import { PlayerType, TeamType } from '../../types/Players.types';
import Spinner from '../../spinner/Spinner';
import Team from './team/Team';
import './Teams.scss';

// API LOGIC
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cb7dfb7b40msh9a3b45b655e8effp17b293jsna42fa502c4b0',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
  },
};

export const getTeams = async (): Promise<TeamType> =>
  await (await fetch('https://free-nba.p.rapidapi.com/teams', options)).json();

const Teams: React.FC = () => {
  // const PlayerData: Array<PlayerType> = data?.data
  const { isLoading } = useQuery(['teams'], () => getTeams());
  return (
    <main>
      <main className='card-component-wrapper'>
        {isLoading ? <Spinner /> : <Team />}
      </main>
    </main>
  );
};

export default Teams;
