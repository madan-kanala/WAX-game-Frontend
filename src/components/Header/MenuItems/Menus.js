import React from 'react';
const Menus = ({ list }) => {
  return (
    <ul class='py-1 text-sm text-gray-700 dark:text-gray-200'>
      {list.map((item) => (
        <li
          className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
          key={item?.id || Math.random()}
        >
          <a href={item.url}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menus;
