import React from 'react';
import { Link } from 'react-router-dom';
import './HomeButton.scss';

const HomeButton = () => {
  return (
    <Link to='/database'>
      <div className='btn-2'>
        <div>
          <span >ENTER DATABASE</span>
        </div>
      </div>
    </Link>
  );
};

export default HomeButton;
