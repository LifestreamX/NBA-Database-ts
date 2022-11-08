import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Nav from './components/Nav/Nav';
import { useQuery } from 'react-query';
import Spinner from './components/Nav/spinner/Spinner';
// import { getPlayers } from './components/API';
import Cards, { getPlayers } from './components/cards/Cards';
// import { getPlayers } from './components/cards/card/Card';



const App = () => {
  const { isLoading } = useQuery<any>(['players'], getPlayers);



  // console.log(isLoading);

  return (
    <main className='App'>
      
      <Nav  />
      {isLoading && (
        <div className='spinner-wrapper'>
          <Spinner />
        </div>
      )}
      <Cards />
 
    </main>
  );
};

export default App;
