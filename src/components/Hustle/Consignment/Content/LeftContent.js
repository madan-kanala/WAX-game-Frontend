import React from 'react';

const LeftContent = () => {
  return (
    <div className='md:w-4/12 order-2 md:order-1'>
      <div className='box-border mx-4  pb-4 '>
        <h2 className='text-center text-olive text-3xl mb-3 font-bold'>
          Gang Member
        </h2>
        <div className='text-center box-border py-8 px-3 border rounded-md bg-olive'>
          <p className='text-lg font-bold font-Inter'>
            NFT Staking area (single slot) this nft cannot be unstaked
          </p>
          <button className='bg-blue-500 px-5 py-2 mt-3 rounded-md'>
            Stake
          </button>
        </div>
        <div className='mt-5 flex justify-center items-center'>
          <div className='xl:w-1/2'>
            <p className='font-semibold text-xl text-center text-primary'>
              Collected Point
            </p>
            <button className='bg-orange-500 px-5 py-2.5 my-3 rounded-md block w-full'>
              1000 HDC
            </button>
            <button className='bg-blue-600 px-5 py-2.5 rounded-md block w-full'>
              Collect Rewards
            </button>
          </div>
        </div>
        <div className='mt-5 flex justify-center items-center'>
          <div className='xl:w-1/2'>
            <p className='font-semibold text-xl text-center text-primary'>
              Bail Cost (HCC)
            </p>
            <button className='bg-blue-500 px-5 py-2.5 my-3 rounded-md block w-full'>
              6000
            </button>
            <button className='bg-money-green px-5 py-2.5 rounded-md block w-full'>
              Pay Bill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
