import React from 'react';
import icon2 from '../../../../assets/images/icons/clean-cash.png';
import icon1 from '../../../../assets/images/icons/hustler-dirty-cash-token.png';

const MiddleContent = () => {
  return (
    <div className='  order-1 mb-5 md:mb-0 md:order-2 '>
      <div className='flex justify-center'>
        <div className='w-full'>
          <div className='mt-5 flex justify-center items-center'>
            <div className='w-full'>
              <div className='flex flex-col justify-center items-center gap-y-1'>
                <p className='font-semibold text-xl text-center text-primary'>
                  Collected HCC:
                </p>
                <div className='w-16'>
                  <img src={icon1} alt='' className='w-full h-full object-' />
                </div>
                <p className='text-white font-bold mb-2'>800</p>
              </div>
              <button className='btn btn-default px-5 py-2.5 rounded-md block w-full'>
                Collect rewards
              </button>
            </div>
          </div>
          <div className='mt-5 flex justify-center items-center'>
            <div className='w-full'>
              <div className='flex flex-col justify-center items-center gap-y-1'>
                <p className='font-semibold text-xl text-center text-primary'>
                  Bail Cost (HCC):
                </p>
                <div className='w-16'>
                  <img src={icon2} alt='' className='w-full h-full object-' />
                </div>
                <p className='text-white font-bold mb-2'>300</p>
              </div>

              <button className='btn btn-default px-2 py-2.5  rounded-md block w-full'>
                Pay Bail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleContent;
