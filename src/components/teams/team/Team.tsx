import React from 'react';
import { useQuery } from 'react-query';
import { TeamTypeData } from '../../../types/Players.types';
import { getTeams } from '../../API';

const Team = () => {
  // Grabbing API data with useQuery
  const { data } = useQuery(['teams'], () => getTeams());
  //  Card section
  return (
    <main className='entire-player-wrapper'>
      <section className='card-wrapper'>
        {data?.data.map((team: TeamTypeData) => (
          <div className='card' key={team.id}>
            <div className='content'>
              <div className='front'>
                <p className='card-text'>{team.full_name}</p>
              </div>
              <div className='back'>
                <p className='card-text'>Conference: {team.conference}</p>
                <p className='card-text'>Division: {team.division}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Team;
