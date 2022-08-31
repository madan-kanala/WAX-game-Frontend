import React from 'react';

const LeftContent = () => {
  return (
    <div className='w-4/12'>
      <div className='box-border mx-4'>
        <div className='text-center box-border py-8 px-3 border rounded-md'>
          <p className='text-lg font-bold font-Inter'>
            NFT Staking area (single slot) this nft cannot be unstaked
          </p>
          <button className='bg-blue-500 px-5 py-2 mt-3 rounded-md'>
            Stake
          </button>
        </div>
        <div className='mt-5 flex justify-center items-center'>
          <div className='w-1/2'>
            <p className='font-semibold text-xl text-center'>Collected Point</p>
            <button className='bg-orange-500 px-5 py-2.5 my-3 rounded-md block w-full'>
              1000 HDC
            </button>
            <button className='bg-blue-600 px-5 py-2.5 rounded-md block w-full'>
              Collect Rewards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
