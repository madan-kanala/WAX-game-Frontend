import React from 'react';

const MiddleContent = () => {
  return (
    <div className='md:w-4/12 w-full order-1 mb-5 md:mb-0 md:order-2 '>
      <div className='mt-5 flex justify-center items-center'>
        <div className='xl:w-1/2'>
          <p className='font-semibold text-lg text-olive mb-1 text-center'>
            Enter Amount
          </p>
          <button className='bg-red-700 px-5 mb-4 py-2.5 rounded-md block w-full'>
            1000 HDC
          </button>
          <p className='font-semibold text-lg text-olive text-center mt-5 mb-2'>
            Rate 250HWT = 10 HDC
          </p>
          <button className='bg-money-green px-5 py-2.5 rounded-md block w-full'>
            Add Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiddleContent;
