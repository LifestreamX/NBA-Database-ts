import React from 'react';
import SearchPlayer from '../search/SearchPlayer';
import Card from './card/Card';
import './Cards.scss';

const Cards = () => {
  return (
    <main>
        <SearchPlayer />
        <Card />
    </main>
  );
};

export default Cards;
