import React from 'react';
import { Link } from 'react-router-dom';
const Card = (props) => {
  const { title, price, image } = props;
  return (
    <div className=' w-full sm:w-1/2 md:w-1/3 2xl:w-1/4 mb-6  sm:mb-0'>
      <div className='mx-4 sm:mx-2'>
        <div class='max-w-sm bg-olive  rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 cursor-pointer'>
          <div className='h-[200px] rounded-t-lg overflow-hidden'>
            <img src={image} alt='' className='w-full h-full object-contain' />
          </div>
          <div class='p-5'>
            <Link to='/'>
              <h5 class='mb-2 text-lg font-bold tracking-tight text-black dark:text-white'>
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
