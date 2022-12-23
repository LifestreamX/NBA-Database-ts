import '../Search.scss';
import Stat from './stat/Stat';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../spinner/Spinner';
import { getStats } from '../API';

const Stats = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  
  const { isLoading } = useQuery(['stats'], () => getStats(pageNumber));

  
  // Function to set page number to number thats clicked for pagination
  const handleChange = (e: any, p: number) => {
    setPageNumber(p);
    console.log(p);
  };

  return (
    <main>
      <main className='card-component-wrapper'>
        {isLoading ? (
          <Spinner />
        ) : (
          <Stat pageNumber={pageNumber} handleChange={handleChange} />
        )}
      </main>
    </main>
  );
};

export default Stats;
