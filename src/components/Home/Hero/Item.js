import React from 'react';
import image from '../../../assets/images/waxp.gif';

const Item = () => {
  return (
    <div className='text-white text-center'>
      <div className='w-80 mx-auto'>
        <img src={image} alt='' className='w-ful h-full object-contain' />
      </div>
      <div className='text-white text-center'>
        <h2 className='mt-4 text-3xl md:text-4xl mx-4 mb-4 md:mb-2 font-bold'>
          Tailwind CSS Template for Crypto, ICO and Web3
        </h2>
        <p className='text-xl md:text-lg'>
          Crypto Currency, Blockchain, ICO, Web3 related website template
          crafted with Tailwind CSS. Comes with all essential UI components and
          pages to launch complete website or landing page for anything that
          related to Crypto, Blockchain and Web3.
        </p>
      </div>
    </div>
  );
};

export default Item;
