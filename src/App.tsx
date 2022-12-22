import './App.scss';
import Nav from './components/Nav/Nav';
import { useQuery } from 'react-query';
import Spinner from './components/Nav/spinner/Spinner';
import { getPlayers } from './components/players/Cards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

const App = () => {
  const { isLoading } = useQuery<any>(['players'], getPlayers);

  return (
    <main className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/database' element={<Nav />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
