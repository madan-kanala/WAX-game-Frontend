import React from 'react';
import HustleMenu from './MenuItems/HustleMenu';
import ShopMenu from './MenuItems/ShopMenu';

const Menu = () => {
  return (
    <div>
      <ul className='flex gap-6'>
        <Item text={'home'} />
        <Item text={'Profile'} />
        <HustleMenu />
        <Item text={'Drop Zone'} />
        <ShopMenu />
        <Item text={'Laundering'} />
        <Item text={'Safe House'} />
      </ul>
    </div>
  );
};

const Item = ({ text }) => {
  return (
    <li className='text-white capitalize cursor-pointer hover:text-blue-400 font-Inter text-lg font-semibold tracking-wide'>
      <a href='/' style={{ all: 'inherit' }}>
        {text}
      </a>
    </li>
  );
};

export default Menu;
