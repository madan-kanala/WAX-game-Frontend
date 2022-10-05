import React, { useState } from 'react';
import AddForm from './AddForm';

const StakeCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className='rounded-md mx-2 mt-10 '>
        <div className='flex justify-end mr-2 mb-2'>
          <button
            className='btn btn-profile mt-3 rounded'
            onClick={() => setIsOpen(true)}
          >
            Add Slot
          </button>
        </div>
        <div className=''>
          <div
            className='p-8 bg-black mr-2 '
            style={{ boxShadow: '#a5a5a5eb 0px 0px 9px 0px' }}
          >
            <div className='flex justify-center'>
              <div className='w-48 h-52'>
                <img
                  src='https://images.pexels.com/photos/102100/pexels-photo-102100.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  className='w-full h-full object-contain'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <div className='text-center mt-2 text-olive'>
              <p>Hustlers Token stored in Safe</p>
              <p>100</p>
            </div>
            <div className='flex justify-center'>
              <button className='btn btn-profile mt-3 border-[#d3ddb3] rounded-md'>
                Collect
              </button>
            </div>
          </div>
        </div>
      </div>

      <AddForm setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

export default StakeCard;
