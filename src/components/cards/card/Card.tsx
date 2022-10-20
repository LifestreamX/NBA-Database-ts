import React from 'react';
import { getPlayers } from '../../API';
import { useQuery } from 'react-query';
import './Card.scss';

const Card = () => {
  const { data, isLoading, error } = useQuery<any>(['players'], getPlayers);

  // console.log(data.data);
  return (
    <main>
        <div className='card'>
          <div className='content'>
            <section className='front'>Front</section>
            <section className='back'>Bfdsfsdf</section>
          </div>
        </div>
    </main>
  );
};

export default Card;
