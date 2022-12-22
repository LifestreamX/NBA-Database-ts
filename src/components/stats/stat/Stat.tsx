import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getStats } from '../Stats';

type Props = {
  pageNumber: number;
  handleChange: any;
};

const Game: React.FC<Props> = ({ pageNumber, handleChange }) => {
  // Pagination pages
  const [totalPages, setTotalPages] = useState<any>();

  const { data } = useQuery(['stats', pageNumber], () => getStats(pageNumber));

  console.log(data);

  useEffect(() => {
    setTotalPages(data?.meta?.total_pages);
  }, [data?.meta?.total_pages]);

  return (
    <main className='entire-player-wrapper'>
      <section className='card-wrapper'>
        {data?.data.map((game: any) => (
          <div className='card' id='stat-card' key={game.id}>
            <div className='content' id='stat-content'>
              <div className='front'>
                <p className='card-text' id='stat-p'>
                  Date: {game?.game['date'].slice(0, 10)}
                </p>

                <p className='card-text' id='stat-p'>
                  Player: {game?.player['first_name']}{' '}
                  {game?.player['last_name']}
                </p>

                <p className='card-text' id='stat-p'>
                  Position: {game?.player['position']}
                </p>

                {game?.player['height_feet'] == null ? (
                  <p className='card-text' id='stat-p'>
                    Height: N/A
                  </p>
                ) : (
                  <p className='card-text' id='stat-p'>
                    Height: {game?.player['height_feet']}’
                    {game?.player['height_inches']}”
                  </p>
                )}

                {game?.player['weight_pounds'] == null ? (
                  <p className='card-text' id='stat-p'>
                    Weight: N/A
                  </p>
                ) : (
                  <p className='card-text' id='stat-p'>
                    Weight: {game?.player['weight_pounds']} lbs
                  </p>
                )}

                <p className='card-text' id='stat-p'></p>
              </div>
              <div className='back'>
                <p className='card-text' id='stat-p'>
                  Minutes: {game.min?.slice(0, 2)} min
                </p>
                <p className='card-text' id='stat-p'>
                  Points: {game.pts}
                </p>
                <p className='card-text' id='stat-p'>
                  Assist: {game.ast}
                </p>
                <p className='card-text' id='stat-p'>
                  Blocks: {game.blk}
                </p>
                <p className='card-text' id='stat-p'>
                  Rebounds: {game.reb}
                </p>
                <p className='card-text' id='stat-p'>
                  Threes Made: {game.fg3m}
                </p>
                <p className='card-text' id='stat-p'></p>
                <p className='card-text' id='stat-p'></p>
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
