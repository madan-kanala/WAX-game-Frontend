import React from 'react';
import AuthMenu from './AuthMenu';
import Logo from './Logo';
import Menu from './Menu';

const Header = () => {
  return (
    <div className='bg-transparent'>
      <div className='mx-10'>
        <div className='flex justify-between items-center'>
          <Logo />
          <Menu />
          <AuthMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
