import React from 'react';
import image1 from '../../../assets/images/hustle/consignment.png';

const Top = () => {
  return (
    <div className='flex  flex-col items-center'>
      <div className='img'>
        <img src={image1} alt='' />
      </div>
      <p className='text-olive mb-3 text-xl'>Remaining work</p>
      <button className='px-5 py-2 font-Inter bg-yellow-300 '>20000</button>
    </div>
  );
};

export default Top;
