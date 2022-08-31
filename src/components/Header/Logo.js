import React from 'react';
import logoImage from '../../assets/images/logo.png';
const Logo = () => {
  return (
    <div className='w-32'>
      <img src={logoImage} alt='' className='w-full h-full object-contain' />
    </div>
  );
};

export default Logo;
