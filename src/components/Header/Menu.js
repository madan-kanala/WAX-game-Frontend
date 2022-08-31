import React from 'react';
import { Link } from 'react-router-dom';
import HustleMenu from './MenuItems/HustleMenu';
import ShopMenu from './MenuItems/ShopMenu';
const Menu = () => {
  return (
    <div>
      <ul className='flex gap-6'>
        <Item text={'home'} url='/' />
        <Item text={'Profile'} url='/profile' />
        <HustleMenu />
        <Item text={'Drop Zone'} url='/drop-zone' />
        <ShopMenu />
        <Item text={'Laundering'} url='/laundering' />
        <Item text={'Safe House'} url='/safe-house' />
      </ul>
    </div>
  );
};

const Item = ({ text, url }) => {
  return (
    <li className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary capitalize cursor-pointer hover:from-purple-400 hover:to-pink-600 font-Inter text-lg font-semibold tracking-wide hover:text-money-green'>
      <Link to={url} style={{ all: 'inherit' }}>
        {text}
      </Link>
    </li>
  );
};

export default Menu;
