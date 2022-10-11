import React from 'react';
import { FaPlus } from 'react-icons/fa';
import icon1 from '../../../../../assets/images/icons/solo-g.png';
const LeftContent = () => {
  return (
    <div className='md:w-4/12 order-2 md:order-1'>
      <div className='box-border mx-4  pb-4 '>
        <div className='flex items-center gap-x-2 mb-3'>
          <p className='text-center text-olive text-xl ml-4 font-bold'>
            Transporter: 0/1
          </p>
          <div className='w-8'>
            <img src={icon1} alt='' className='w-full h-full object-' />
          </div>
        </div>

        <Item />
        <div className='mt-2'>
          <div className='flex items-center justify-center gap-x-2'>
            <div className='w-6'>
              <img src={icon1} alt='' className='w-full h-full object-' />
            </div>
            <p className='text-center text-olive text-sm font-bold'>
              Locked Up
            </p>
          </div>
          <div className='w-5/12 mx-auto mt-2'>
            <p className='text-primary text-center text-lg'>0/1</p>
            <div className='w-full h-24 btn btn-default flex justify-center items-center rounded-xl'>
              <FaPlus className='text-gray-300 text-5xl' />
            </div>
            <p className='btn btn-default w-full mt-3 rounded-md text-center capitalize'>
              Get Out of jail
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Item = () => {
  return (
    <>
      <div className='text-center box-border border rounded-md h-80 overflow-hidden p-6 bg-black mr-2 custom-shadow '>
        <div className='flex h-full justify-center items-center'>
          <div className='w-full px-2 h-full border cursor-pointer border-gray-400  flex justify-center items-center rounded-3xl'>
            <FaPlus className='text-gray-300 text-5xl' />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftContent;
