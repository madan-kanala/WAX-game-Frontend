import React from 'react';

const RightContent = () => {
  return (
    <div className='w-4/12'>
      <div className='border mx-3 p-8 rounded-md'>
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
    <div className='w-1/2'>
      <div className='text-center'>
        <p>{text}</p>
        <button className='bg-blue-500 px-9 py-7 rounded-md'>Stake</button>
      </div>
    </div>
  );
};

export default RightContent;
