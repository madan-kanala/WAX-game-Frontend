import React from 'react';

const MiddleContent = () => {
  return (
    <div className='w-4/12'>
      <div className='mt-5 flex justify-center items-center'>
        <div className='w-1/2'>
          <p className='font-semibold text-base  text-center'>
            Collected Point
          </p>
          <button className='bg-red-700 px-5 mb-3 py-2.5 rounded-md block w-full'>
            1000 HDC
          </button>
          <p className='font-semibold text-base  text-center'>
            Collected Point
          </p>
          <button className='bg-blue-500 px-5 py-2.5 rounded-md block w-full'>
            Collect Rewards
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiddleContent;
