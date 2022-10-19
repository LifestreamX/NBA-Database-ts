import React from 'react';
import './Nav.scss';
import nbalogo from '../../images/nbalogo.webp';

const Nav = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <img src={nbalogo} alt='' />
        <h1> NBA DATABASE</h1>
      </div>
    </nav>
  );
};

export default Nav;
