import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getGames } from './Games';

type Props = {
  pageNumber: number;
  handleChange: any;
};

const Game: React.FC<Props> = ({ pageNumber, handleChange }) => {
  // Pagination pages
  const [totalPages, setTotalPages] = useState<any>();

  const { data } = useQuery(['games', pageNumber], () => getGames(pageNumber));


  useEffect(() => {
    setTotalPages(data?.meta?.total_pages);
  }, [data?.meta?.total_pages]);

  

  return (
    <main className='entire-player-wrapper'>
      <section className='card-wrapper'>
        {data?.data.map((game: any) => (
          <div className='card' key={game.id}>
            <div className='content'>
              <div className='front'>
                <p className='card-text'>Date: {game.date.slice(0, 10)}</p>
                <p className='card-text'>Home: {game.home_team['full_name']}</p>

                <p className='card-text'>
                  Away: {game.visitor_team['full_name']}
                </p>
              </div>
              <div className='back'>
                <p className='card-text'>
                  {game.home_team['abbreviation']}: {game.home_team_score} (
                  {game.home_team['conference']})
                </p>
                <p className='card-text'>
                  {game.visitor_team['abbreviation']}: {game.visitor_team_score}{' '}
                  ({game.visitor_team['conference']})
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
      {/* PAGINATION SECTION */}
      <section className='pagination-wrapper'>
        <Pagination
          count={totalPages}
          color='primary'
          onChange={handleChange}
          className='pagi'
          sx={{ fontSize: '4rem' }}
        />
      </section>
    </main>
  );
};

export default Game;
