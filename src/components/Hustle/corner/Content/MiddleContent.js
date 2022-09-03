import React from 'react';

const MiddleContent = () => {
  return (
    <div className='md:w-4/12 w-full order-1 mb-5 md:mb-0 md:order-2 '>
      <div className='mt-5 flex justify-center items-center'>
        <div className='xl:w-1/2 md:mt-24'>
          <p className='text-olive mb-3 text-xl  text-center block w-full'>
            Remaining work
          </p>
          <button className='px-5 py-2 font-Inter rounded-md bg-yellow-300 mb-2 block w-full'>
            20000
          </button>

          <p className='font-semibold text-lg text-olive mb-1 text-center'>
            Enter Amount
          </p>
          <button className='bg-red-700 px-5 mb-4 py-2.5 rounded-md block w-full'>
            0 HDC
          </button>
          <p className='font-semibold text-xs text-olive text-center mt-5 mb-2'>
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
