import React from 'react';
import { Link } from 'react-router-dom';
const Card = (props) => {
  const { title, price, image } = props;
  return (
    <div className='w-1/3 2xl:w-1/4'>
      <div className='mx-2'>
<<<<<<< HEAD
        <div class='max-w-sm bg-gray-700 text-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 cursor-pointer'>
=======
        <div class='max-w-sm bg-olive  rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 cursor-pointer'>
>>>>>>> bdcb0f73fb227be80448ed34d39db386cc1d7188
          <div className='h-[200px] rounded-t-lg overflow-hidden'>
            <img src={image} alt='' className='w-full h-full object-contain' />
          </div>
          <div class='p-5'>
            <Link to='/'>
<<<<<<< HEAD
              <h5 class='mb-2 text-lg font-bold tracking-tight text-white dark:text-white'>
=======
              <h5 class='mb-2 text-lg font-bold tracking-tight text-black dark:text-white'>
>>>>>>> bdcb0f73fb227be80448ed34d39db386cc1d7188
                {title}
              </h5>
            </Link>
            <div className='flex justify-between items-center mt-5'>
              <p>${price}</p>
              <Link
                to='/'
                className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
              >
                View Asset
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
