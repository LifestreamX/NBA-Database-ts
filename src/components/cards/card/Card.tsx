import React, { useEffect, useState } from 'react';
// import { getPlayers } from '../../API';
import './Card.scss';
import Pagination from '@mui/material/Pagination';
import { useQuery } from 'react-query';
import { getPlayers } from '../Cards';

type Props = {
  searchInput: string;
  filteredResults: any;
  handleChange: any;
  filteredAllResults: any;
  pageNumber: number;
};

const Card: React.FC<Props> = ({
  searchInput,
  filteredResults,
  handleChange,
  filteredAllResults,
  pageNumber,
}) => {
  // Grabbing API data with useQuery
  const { data, isLoading } = useQuery(['players', pageNumber], () =>
    getPlayers(pageNumber)
  );


  //  Card section
  return (
    <main className='entire-player-wrapper'>
      {/* When the Search for all players button is clicked */}
      {filteredAllResults.length > 0 ? (
        filteredAllResults?.map((player: any) => {
          return (
            <div className='card  card-all-player' key={player.id}>
              <div className='content'>
                <div className='font'>
                  <p>First Name: {player.first_name}</p>
                  <p>Last Name: {player.last_name}</p>

                  <p>
                    Position: {player.position !== '' && player.position}{' '}
                    {player.position === '' && 'N/A'}
                  </p>
                </div>
                <div className='back'>
                  <p>
                    Team: {player.team.city} {player.team.name}
                  </p>
                  <p>Conference: {player.team.conference}</p>

                  <p>Division: {player.team.division}</p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <main>
          {searchInput.length > 1 ? (
            // Filter for only current page
            filteredResults.map((player: any) => {
              return (
                <section className='card-wrapper-page-filter'>
                  <div className='card' key={player.id}>
                    <div className='content'>
                      <div className='font'>
                        <p>First Name: {player.first_name}</p>
                        <p>Last Name: {player.last_name}</p>

                        <p>
                          Position: {player.position !== '' && player.position}{' '}
                          {player.position === '' && 'N/A'}
                        </p>
                      </div>
                      <div className='back'>
                        <p>
                          Team: {player.team.city} {player.team.name}
                        </p>
                        <p>Conference: {player.team.conference}</p>

                        <p>Division: {player.team.division}</p>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })
          ) : (
            // Default layout no filter
            <section className='card-wrapper'>
              {data?.data.map((player: any) => (
                <div className='card' key={player.id}>
                  <div className='content'>
                    <div className='font'>
                      <p>First Name: {player.first_name}</p>
                      <p>Last Name: {player.last_name}</p>

                      <p>
                        Position: {player.position !== '' && player.position}{' '}
                        {player.position === '' && 'N/A'}
                      </p>
                    </div>
                    <div className='back'>
                      <p>
                        Team: {player.team.city} {player.team.name}
                      </p>
                      <p>Conference: {player.team.conference}</p>

                      <p>Division: {player.team.division}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )}
        </main>
      )}

      {/* PAGINATION SECTION */}
      <section className='pagination-wrapper'>
        {!isLoading && (
          <Pagination
            count={11}
            color='primary'
            onChange={handleChange}
            className='pagi'
            sx={{ fontSize: '4rem' }}
          />
        )}
      </section>
    </main>
  );
};

export default Card;
