import React from 'react';
import './Nav.scss';
import nbalogo from '../../images/nbalogo.webp';

const Nav = () => {
  return (
    <header>
      <div className='nav-wrapper'>
        <img src={nbalogo} alt='' />
        <h1> NBA PLAYER DATABASE</h1>
      </div>
    </header>
  );
};

export default Nav;
