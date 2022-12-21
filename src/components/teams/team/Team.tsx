import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { useQuery } from 'react-query';
import { getTeams } from '../Teams';

const Team = () => {
  // Grabbing API data with useQuery
  const { data, isLoading, error } = useQuery(['teams'], () => getTeams());
  //  Card section
  return (
    <main className='entire-player-wrapper'>
      <section className='card-wrapper'>
        {data?.data.map((team: any) => (
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
