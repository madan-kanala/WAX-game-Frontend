import React from 'react';
import { Link } from 'react-router-dom';
const Menus = ({ list, onSubmit }) => {
  return (
    <ul class='py-1 text-sm text-olive bg-black custom-shadow'>
      {list.map((item) => (
        <li
          className='block py-2 px-4 hover:bg-gray-900 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
          key={item?.id || Math.random()}
          onClick={() => onSubmit(false)}
        >
          <Link to={item.url}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Menus;
