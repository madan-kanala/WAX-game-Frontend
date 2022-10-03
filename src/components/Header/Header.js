import React from 'react';
import usePageOffset from '../../hooks/usePageOffset';
import AuthMenu from './AuthMenu';
import HumbuggerMenu from './Humberger/HumbuggerMenu';
import Logo from './Logo';
import Menu from './Menu';

const Header = ({ isTransparent = false }) => {
  const { y: pageYOffset } = usePageOffset();
  return (
    <div
      className={`${isTransparent ? 'bg-transparent' : 'bg-black'} ${
        pageYOffset > 100 ? 'fixed w-full top-0' : 'relative'
      } z-50 custom-shadow`}
    >
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
