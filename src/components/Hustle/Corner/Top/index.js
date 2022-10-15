import React, { useState } from 'react';
import image1 from '../../../../assets/images/hustle/consignment.png';
import icon1 from '../../../../assets/images/icons/work.png';
import ReUpForm from './ReupForm';

const Top = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='img'>
          <img src={image1} alt='' />
        </div>
        <div className='flex items-center gap-x-2'>
          <div className='w-16'>
            <img src={icon1} alt='' className='w-full h-full object-' />
          </div>
          <p className='text-olive font-bold mb-1 text-xl'>
            Remaining work: <span className='font-bold'>10K</span>
          </p>
          <div className='w-16'>
            <img src={icon1} alt='' className='w-full h-full object-' />
          </div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className='btn btn-default font-Inter rounded-md w-32 font-bold '
        >
          Re-up
        </button>
      </div>
      <ReUpForm setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default Top;
