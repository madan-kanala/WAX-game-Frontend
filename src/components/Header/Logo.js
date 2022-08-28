import React from 'react';
import logoImage from '../../assets/images/waxp.gif';
const Logo = () => {
  return (
    <div className='w-20'>
      <img src={logoImage} alt='' className='w-full h-full object-contain' />
    </div>
  );
};

export default Logo;
