import React from 'react';
import { Link } from 'react-router-dom';
import HomeButton from './components/HomeButton';
import './Home.scss';
import Background from './assets/videos/homeBackground.mp4';

const Home = () => {
  return (
    <main>
      <video autoPlay loop muted className='video-wrapper'>
        <source src={Background} />
      </video>
      <div className='home-button-wrapper'>
        <HomeButton />
      </div>
    </main>
  );
};

export default Home;
