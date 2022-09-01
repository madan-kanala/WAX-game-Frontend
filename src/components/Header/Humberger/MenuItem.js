import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ text, url, noLink = false }) => {
  if (noLink) {
    return (
      <li className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary capitalize cursor-pointer hover:from-purple-400 hover:to-pink-600 font-Inter text-lg font-semibold tracking-wide hover:text-money-green'>
        {text}
      </li>
    );
  }
  return (
    <li className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary capitalize cursor-pointer hover:from-purple-400 hover:to-pink-600 font-Inter text-lg font-semibold tracking-wide hover:text-money-green my-1.5'>
      <Link to={url} style={{ all: 'inherit' }}>
        {text}
      </Link>
    </li>
  );
};

export default MenuItem;
