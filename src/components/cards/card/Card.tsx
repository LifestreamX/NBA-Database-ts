import React, { useEffect, useState } from 'react';
import { getPlayers } from '../../API';
import { useQuery } from 'react-query';
import './Card.scss';

export type PlayerType = {
  first_name: string;
  height_feet: number;
  height_inches: number;
  id: number;
  last_name: string;
  position: string;
  weight_pounds: number;
  team: any;
};

const Card = () => {
  const [players, setPlayers] = useState([] as PlayerType[]);
  const { data, isLoading, error } = useQuery<any>(['players'], getPlayers);

  useEffect(() => {
    setPlayers(data?.data);
  });

  console.log(data?.data);
  return (
    <div className='card-wrapper'>
      {players?.map((player) => (
        <div className='card' key={player.id}>
          <div className='content'>
            <div className='font'>
              <p>First Name: {player.first_name}</p>
              <p>Last Name: {player.last_name}</p>
              <p>Position: {player.position}</p>
            </div>
            <div className='back'>
              <p>
                Team: {player.team.city} {player.team.name}
              </p>
              <p>Conference: {player.team.conference}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
