import React from 'react';

const RightContent = () => {
  return (
    <div className='mt-12 md:mt-0 md:w-4/12 order-3 '>
      <h2 className='text-center text-olive text-3xl mb-3 font-bold'>
        Gang Member
      </h2>
      <div className='border mx-3 p-8 rounded-md bg-olive'>
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
