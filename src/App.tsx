import './App.scss';
import Nav from './components/Nav/Nav';
import { useQuery } from 'react-query';
import Spinner from './components/Nav/spinner/Spinner';
import { getPlayers } from './components/players/Cards';

const App = () => {
  const { isLoading } = useQuery<any>(['players'], getPlayers);

 


  return (
    <main className='App'>
      <Nav />
      {isLoading && (
        <div className='spinner-wrapper'>
          <Spinner />
        </div>
      )}

    </main>
  );
};

export default App;
