import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { StatTypeData } from '../../../types/Players.types';
import { getStats } from '../../API';

type Props = {
  pageNumber: number;
  handleChange: (e: any, p: number) => void;
};

const Stat: React.FC<Props> = ({ pageNumber, handleChange }) => {
  // Pagination pages
  const [totalPages, setTotalPages] = useState<number>();

  const { data } = useQuery(['stats', pageNumber], () => getStats(pageNumber));

  useEffect(() => {
    setTotalPages(data?.meta?.total_pages);
  }, [data?.meta?.total_pages]);


  return (
    <main className='entire-player-wrapper'>
      <section className='card-wrapper'>
        {data?.data.map((stat: StatTypeData) => (
          <div className='card' id='stat-card' key={stat.id}>
            <div className='content' id='stat-content'>
              <div className='front'>
                <p className='card-text' id='stat-p'>
                  Date: {stat?.game['date'].slice(0, 10)}
                </p>

                <p className='card-text' id='stat-p'>
                  Player: {stat?.player['first_name']}{' '}
                  {stat?.player['last_name']}
                </p>

                <p className='card-text' id='stat-p'>
                  Team: {stat?.team['abbreviation']}
                </p>

                <p className='card-text' id='stat-p'>
                  Position: {stat?.player['position']}
                </p>

                {stat?.player['height_feet'] == null ? (
                  <p className='card-text' id='stat-p'>
                    Height: N/A
                  </p>
                ) : (
                  <p className='card-text' id='stat-p'>
                    Height: {stat?.player['height_feet']}’
                    {stat?.player['height_inches']}”
                  </p>
                )}

                {stat?.player['weight_pounds'] == null ? (
                  <p className='card-text' id='stat-p'>
                    Weight: N/A
                  </p>
                ) : (
                  <p className='card-text' id='stat-p'>
                    Weight: {stat?.player['weight_pounds']} lbs
                  </p>
                )}

                <p className='card-text' id='stat-p'></p>
              </div>
              <div className='back'>
                <p className='card-text' id='stat-p'>
                  Minutes: {stat.min?.slice(0, 2)} min
                </p>
                <p className='card-text' id='stat-p'>
                  Points: {stat.pts}
                </p>
                <p className='card-text' id='stat-p'>
                  Assist: {stat.ast}
                </p>
                <p className='card-text' id='stat-p'>
                  Blocks: {stat.blk}
                </p>
                <p className='card-text' id='stat-p'>
                  Rebounds: {stat.reb}
                </p>
                <p className='card-text' id='stat-p'>
                  Threes Made: {stat.fg3m}
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

export default Stat;
