import React, { useState } from 'react';
import image1 from '../../../../assets/images/hustle/the-corner.png';
import ReUpForm from './ReupForm';

const Top = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='flex  flex-col items-center'>
        <div className='img'>
          <img src={image1} alt='' />
        </div>
        <p className='text-olive font-bold mb-1 text-xl'>Remaining work: 10</p>
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
