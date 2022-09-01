import React from 'react';
import AuthMenu from './AuthMenu';
import HumbuggerMenu from './Humberger/HumbuggerMenu';
import Logo from './Logo';
import Menu from './Menu';

const Header = ({ isTransparent = false }) => {
  return (
    <div className={`${isTransparent ? 'bg-transparent' : 'bg-black'}`}>
      <div className='mx-10'>
        <div className='flex justify-between items-center'>
          <Logo />
          <Menu />
          <AuthMenu />
          <HumbuggerMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
