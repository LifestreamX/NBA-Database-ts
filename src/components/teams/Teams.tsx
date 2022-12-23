import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../spinner/Spinner';
import Team from './team/Team';
import { getTeams } from '../API';



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
