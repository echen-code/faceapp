import React from 'react';
import Tilt from 'react-tilt';
import head from './head.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 170, width: 150 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingBottom: '5px'}} alt='logo' src={head}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;