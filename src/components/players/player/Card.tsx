import React, { useEffect, useState } from 'react';
// import { getPlayers } from '../../API';
import Pagination from '@mui/material/Pagination';
import { useQuery } from 'react-query';
import { getPlayers } from '../Cards';
import '../../Card.scss';

type Props = {
  searchInput: string;
  filteredResults: any;
  handleChange: any;
  filteredAllResults: any;
  pageNumber: number;
  totalPages: number;
  filteredTotalPages: any;
  handleFilterChange: any;
};

const Card: React.FC<Props> = ({
  handleChange,
  filteredAllResults,
  pageNumber,
  totalPages,
  searchInput,
  filteredResults,
  filteredTotalPages,
  handleFilterChange,
}) => {
  // Grabbing API data with useQuery
  const { data } = useQuery(['players', pageNumber], () =>
    getPlayers(pageNumber)
  );

  console.log(filteredAllResults?.data?.length);
  //  Card section
  return (
    <main className='entire-player-wrapper'>
      {filteredAllResults?.data?.length > 0 ? (
        <section className='card-wrapper'>
          {filteredAllResults?.data?.map((player: any) => (
            <div className='card'>
              <div className='card' key={player.id}>
                <div className='content'>
                  <div className='front'>
                    <p className='card-text'>First Name: {player.first_name}</p>
                    <p className='card-text'>Last Name: {player.last_name}</p>

                    <p className='card-text'>
                      Position: {player.position !== '' && player.position}{' '}
                      {player.position === '' && 'N/A'}
                    </p>
                  </div>
                  <div className='back'>
                    <p className='card-text'>
                      Team: {player.team.city} {player.team.name}
                    </p>
                    <p className='card-text'>
                      Conference: {player.team.conference}
                    </p>

                    <p className='card-text'>
                      Division: {player.team.division}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section className='card-wrapper'>
          {data?.data.map((player: any) => (
            <div className='card' key={player.id}>
              <div className='content'>
                <div className='front'>
                  <p className='card-text'>First Name: {player.first_name}</p>
                  <p className='card-text'>Last Name: {player.last_name}</p>

                  <p className='card-text'>
                    Position: {player.position !== '' && player.position}{' '}
                    {player.position === '' && 'N/A'}
                  </p>
                </div>
                <div className='back'>
                  <p className='card-text'>
                    Team: {player.team.city} {player.team.name}
                  </p>
                  <p className='card-text'>
                    Conference: {player.team.conference}
                  </p>

                  <p className='card-text'>Division: {player.team.division}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* PAGINATION SECTION */}
      {filteredAllResults?.data?.length == undefined && (
        <section className='pagination-wrapper'>
          <Pagination
            count={totalPages}
            color='primary'
            onChange={handleChange}
            className='pagi'
            sx={{ fontSize: '4rem' }}
          />
        </section>
      )}
    </main>
  );
};

export default Card;
