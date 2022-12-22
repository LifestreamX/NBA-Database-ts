import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Nav from './components/Nav';

const App = () => {
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
