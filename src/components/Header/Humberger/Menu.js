import React from 'react';
import HustleMenu from './HustleMenu';
import MenuItem from './MenuItem';
import ShopMenu from './ShopMenu';
const Menu = () => {
  return (
    <div className='md:hidden pl-2 '>
      <ul className='gap-6'>
        <MenuItem text={'home'} url='/' />
        <MenuItem text={'Profile'} url='/profile' />
        <HustleMenu />
        <MenuItem text={'Drop Zone'} url='/drop-zone' />
        <ShopMenu />
        <MenuItem text={'Laundering'} url='/laundering' />
        <MenuItem text={'Safe House'} url='/safe-house' />
      </ul>
    </div>
  );
};

export default Menu;
