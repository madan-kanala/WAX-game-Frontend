import React from 'react';

const StakeCard = () => {
  return (
    <div className='rounded-md mx-2 mt-10 '>
      <div className='flex justify-end mr-2 mb-2'>
        <button className='bg-money-green tex-sm px-3 py-1.5 mt-3 rounded-sm'>
          Add Slot
        </button>
      </div>
      <div
        className='p-8 bg-black mr-2 '
        style={{ boxShadow: '#a5a5a5eb 0px 0px 9px 0px' }}
      >
        <div className=''>
          <div className='flex justify-center'>
            <button className='bg-blue-500 px-5 py-2 mt-3 rounded-md'>
              Stack Safe NFT
            </button>
          </div>
          <div className='text-white text-center mt-2'>
            <p>Hustlers Token stored in Safe</p>
            <p>100</p>
          </div>
          <div className='flex justify-center'>
            <button className='bg-money-green tex-sm px-3 py-1.5 mt-3 rounded-sm'>
              Collect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeCard;
