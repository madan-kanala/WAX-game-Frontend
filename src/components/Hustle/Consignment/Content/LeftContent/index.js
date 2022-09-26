import React from 'react';
import Character from './Character';

const LeftContent = () => {
  return (
    <div className='md:w-4/12 order-2 md:order-1'>
      <div className='box-border mx-4  pb-4 '>
        <h2 className='text-left text-olive text-xl mb-1 font-bold'>
          Transporter
        </h2>
        <div className='text-center box-border py-8 px-3 border rounded-md bg-olive h-80 overflow-y-auto overflow-x-hidden'>
          <div className='flex justify-center gap-4 flex-wrap'>
            {[1, 2].map((i) => (
              <Character key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
