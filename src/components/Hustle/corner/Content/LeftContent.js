import React from 'react';

const LeftContent = () => {
  return (
    <div className='md:w-4/12 order-2 md:order-1'>
      <div className='box-border mx-4  pb-4 '>
        <div className='flex justify-between mb-2 items-center'>
          <h2 className='text-center text-olive text-xl font-bold'>
            Gang Member
          </h2>
          <button className='px-3 rounded-md py-1 text-sm font-Inter bg-money-green '>
            Add Slot
          </button>
        </div>
        <div className='text-center box-border py-5 px-3 border rounded-md border-olive md:flex gap-2 justify-center'>
          <button className='bg-money-green md:text-sm xl:text-base px-1.5 py-2  rounded-md'>
            Stake/Unstake
          </button>
          <button className='bg-money-green md:text-sm xl:text-base px-1.5 py-2  rounded-md'>
            Stake/Unstake
          </button>
        </div>
        <div className='mt-5 flex justify-center items-center'>
          <div className='xl:w-1/2'>
            <p className='font-semibold text-xl text-center text-primary'>
              Collected Point
            </p>
            <button className='text-black bg-olive from-gray-50 to-gray-100 px-5 py-2.5 my-3 rounded-md block w-full'>
              1000 HDC
            </button>

            <div className='text-center box-border  md:flex gap-2 justify-center mb-2'>
              <button className='bg-money-green md:text-sm xl:text-base px-1.5 py-2 mt-3 rounded-md'>
                Unstake All
              </button>
              <button className='bg-money-green md:text-sm xl:text-base px-1.5 py-2 mt-3 rounded-md'>
                Collect Rewards
              </button>
            </div>
            <div className='text-center'>
              <p className='font-semibold text-lg text-olive text-center mt-5 '>
                Bail Cost
              </p>
              <button className='text-black bg-olive from-gray-50 to-gray-100 px-3 py-1.5 rounded-md mb-1'>
                1000 HDC
              </button>
              <br />
              <button className='bg-money-green px-2 py-1.5 rounded-md'>
                Pay Bil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
