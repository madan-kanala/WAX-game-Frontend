import React from 'react';

const Bottom = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-full md:w-1/6'>
        <div className='mt-5 flex justify-center items-center'>
          <div className='w-full'>
            <p className='font-semibold text-xl text-center text-primary'>
              Collected Point
            </p>
            <button className='btn btn-default px-5 py-2.5 rounded-md block w-full'>
              1000 HDC
            </button>
          </div>
        </div>
        <div className='mt-5 flex justify-center items-center'>
          <div className='w-full'>
            <p className='font-semibold text-xl text-center text-primary'>
              Bail Cost (HCC)
            </p>
            <button className='btn btn-default px-2 py-2.5  rounded-md block w-full'>
              Pay Bail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
