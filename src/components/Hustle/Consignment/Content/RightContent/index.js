import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import icon1 from '../../../../../assets/images/icons/solo-bood.png';
import AddForm from './AddForm';
import data from './data.json';
const RightContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [slots, setSlots] = useState(data);
  const [totalSlots] = useState(8);

  useEffect(() => {
    setSlots(data.slice(0, 3));
  }, []);

  return (
    <div className=' w-full mt-12 md:mt-0 md:w-1/2 lg:w-4/12 order-3 '>
      <div className='flex justify-between mb-2 items-center'>
        <div className=' flex items-center gap-x-2'>
          <p className='text-center text-olive text-xl ml-4 font-bold'>
            Active Boosts: {slots.length} / {totalSlots}
          </p>
          <div className='w-10'>
            <img src={icon1} alt='' className='w-full h-full object-' />
          </div>
        </div>
        <p
          className='btn btn-default rounded-md text-sm cursor-pointer'
          onClick={() => setIsOpen(true)}
        >
          Add Slot
        </p>
      </div>
      <div className='border mx-3 p-8 rounded-md  h-80 overflow-y-auto custom-shadow bg-black mr-2  '>
        <div className='flex flex-wrap gap-y-4 '>
          {slots.map((slot) => (
            <Item image={slot.image} key={slot.id} />
          ))}
          <Add />
        </div>
      </div>
      <AddForm setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

const Item = ({ image }) => {
  return (
    <div className='w-full sm:w-1/2 md:w-full xl:w-1/2 '>
      <div className='w-full h-32 px-2'>
        <img src={image} alt='' className='w-full h-full object-cover' />
      </div>
    </div>
  );
};
const Add = () => {
  return (
    <div className='w-full sm:w-1/2 md:w-full xl:w-1/2 '>
      <div className='w-full h-32 px-2 border border-gray-400  flex justify-center items-center'>
        <FaPlus className='text-gray-300 text-5xl' />
      </div>
    </div>
  );
};

export default RightContent;
