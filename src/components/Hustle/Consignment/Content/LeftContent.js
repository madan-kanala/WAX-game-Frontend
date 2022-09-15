import React from 'react';

const LeftContent = () => {
  return (
    <div className='md:w-4/12 order-2 md:order-1'>
      <div className='box-border mx-4  pb-4 '>
        <h2 className='text-left text-olive text-xl mb-1 font-bold'>
          Transporter
        </h2>
        <div className='text-center box-border py-8 px-3 border rounded-md bg-olive h-80 overflow-y-auto'>
          <div className='flex justify-center'>
            <div className='w-60 h-60'>
              <img
                src='https://images.pexels.com/photos/102100/pexels-photo-102100.jpeg?auto=compress&cs=tinysrgb&w=1600'
                className='w-full h-full object-contain'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
