import React from 'react';
import logoImage from '../../assets/images/logo.png';
const Logo = () => {
  return (
    <div className='w-28'>
      <img src={logoImage} alt='' className='w-full h-full object-cover' />
    </div>
  );
};

export default Logo;
