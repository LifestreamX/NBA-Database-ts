import { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner/Spinner';
import { getGames } from './API';
import Game from './Game';

const Games = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { isLoading } = useQuery(['games'], () => getGames(pageNumber));

  // Function to set page number to number thats clicked for pagination
  const handleChange = (e: any, p: number) => {
    // console.log(e, p);
    setPageNumber(p);
    console.log(pageNumber);
  };

  return (
    <main>
      <main className='card-component-wrapper'>
        {isLoading ? (
          <Spinner />
        ) : (
          <Game pageNumber={pageNumber} handleChange={handleChange} />
        )}
      </main>
    </main>
  );
};

export default Games;
