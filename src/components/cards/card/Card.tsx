import React, { useEffect, useState } from 'react';
// import { getPlayers } from '../../API';
import { useQuery } from 'react-query';
import './Card.scss';
import ReactPaginate from 'react-paginate';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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

export type dataType = {
  data: any;
};

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cb7dfb7b40msh9a3b45b655e8effp17b293jsna42fa502c4b0',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
  },
};

export const getPlayers = async (pageNumber: any): Promise<dataType> =>
  await (
    await fetch(
      `https://free-nba.p.rapidapi.com/players?page=${pageNumber}&per_page=9`,
      options
    )
  ).json();

const Card = () => {
  const [players, setPlayers] = useState([] as PlayerType[]);
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, error } = useQuery<any>(
    ['players', pageNumber],
    () => getPlayers(pageNumber)
  );

  useEffect(() => {
    setPlayers(data?.data);
  });

  // Function to set page number to number thats clicked for pagination
  const handleChange = (e: any, p: any) => {
    console.log(e, p);
    setPageNumber(p);
  };

  console.log(players);
  return (
    <>
      <div className='card-wrapper'>
        {players?.map((player) => (
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
      </div>
    </>
  );
};

export default Card;
