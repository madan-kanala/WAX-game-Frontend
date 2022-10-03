import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ text, url, noLink = false }) => {
  return (
    <li
      className={`text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary capitalize cursor-pointer hover:from-purple-400 hover:to-pink-600 font-Inter text-lg font-semibold tracking-wide hover:text-money-green ${
        noLink ? '' : 'my-2.5'
      }`}
    >
      {noLink ? (
        text
      ) : (
        <Link to={url} style={{ all: 'inherit' }}>
          {text}
        </Link>
      )}
    </li>
  );
};

export default MenuItem;
