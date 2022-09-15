import React from 'react';
import image1 from '../../../assets/images/hustle/consignment.png';

const Top = () => {
  return (
    <div className='flex  flex-col items-center'>
      <div className='img'>
        <img src={image1} alt='' />
      </div>
      <p className='text-olive font-bold mb-1 text-xl'>Remaining work: 10</p>
      <button className='btn btn-default font-Inter rounded-md w-32 font-bold '>
        Re-up
      </button>
    </div>
  );
};

export default Top;
