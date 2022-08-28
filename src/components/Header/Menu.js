import React from 'react';

const Menu = () => {
  return (
    <div>
      <ul className='flex gap-6'>
        <Item text={'home'} />
        <Item text={'Profile'} />
        <Item text={'Hustle'} />
        <Item text={'Drop Zone'} />
        <Item text={'Shop'} />
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
