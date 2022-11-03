import React, { useEffect, useState } from 'react';
// import { getPlayers } from '../../API';
import { useQuery } from 'react-query';
import './Card.scss';
import ReactPaginate from 'react-paginate';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import SearchPlayer from '../../search/SearchPlayer';

type Props = {
  searchInput: any;
  filteredResults: any;
  players: any;
  handleChange: any;
  filteredAllResults: any;
};

const Card: React.FC<Props> = ({
  searchInput,
  filteredResults,
  players,
  handleChange,
  filteredAllResults,
}) => {
  console.log(filteredAllResults);

  return (
    <main>
      {/* Card section */}

      {filteredAllResults.length > 0 ? (
        filteredAllResults.map((player: any) => {
          return (
            <section className='card-wrapper'>
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
        <main>
          {searchInput.length > 1 ? (
            // Filter for only page
            filteredResults.map((player: any) => {
              return (
                <section className='card-wrapper'>
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
              {players?.map((player: any) => (
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
        <Pagination
          count={11}
          color='primary'
          onChange={handleChange}
          className='pagi'
          sx={{ fontSize: '4rem' }}
        />
      </section>
    </main>
  );
};

export default Card;
