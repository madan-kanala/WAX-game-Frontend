import React from 'react';

const RightContent = () => {
  return (
    <div className='mt-12 md:mt-0 md:w-4/12 order-3 '>
      <div className='flex justify-between mb-2 items-center'>
        <h2 className='text-center text-olive text-xl ml-4 font-bold'>
          Active Boosts
        </h2>
        <p className='btn btn-default rounded-md text-sm'>Add Slot</p>
      </div>
      <div className='border mx-3 p-8 rounded-md bg-olive h-80 overflow-y-auto'>
        <div className='flex flex-wrap gap-y-6 '>
          <Item text={'Gang Hire'} />
          <Item text={'Get Out Of Jail'} />
          <Item text={'Enforcer'} />
          <Item text={'Production Boost'} />
        </div>
      </div>
    </div>
  );
};

const Item = ({ text }) => {
  return (
    <div className='w-full sm:w-1/2 md:w-full xl:w-1/2 '>
      <div className='text-center mx-3'>
        <p>{text}</p>
        <button className='bg-blue-500 px-9 py-7 rounded-md'>Stake</button>
      </div>
    </div>
  );
};

export default RightContent;
