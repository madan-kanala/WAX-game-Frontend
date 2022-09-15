import React, { useState } from 'react';
import AddForm from './AddForm';
import ModalMenu from './ModalMenu';

const LeftContent = () => {
  const [isMenOpen, setIsMenOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className='md:w-4/12 order-2 md:order-1'>
      <div className='box-border mx-4  pb-4 '>
        <div className='flex justify-between mb-2 items-center'>
          <h2 className='text-center text-olive text-xl ml-4 font-bold'>
            Hustlers:
          </h2>
          <p
            className='btn btn-default rounded-md text-sm cursor-pointer'
            onClick={() => setIsFormOpen(true)}
          >
            Add Slot
          </p>
        </div>

        <div className='text-center box-border py-8 px-3 border rounded-md bg-olive h-80 overflow-y-auto'>
          <div className='flex justify-center gap-4'>
            {[1, 2].map((i) => (
              <div
                className='w-60 h-60 cursor-pointer'
                onClick={() => setIsMenOpen(true)}
                key={i}
              >
                <img
                  src='https://images.pexels.com/photos/102100/pexels-photo-102100.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  className='w-full h-full object-contain'
                  alt=''
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <AddForm setIsOpen={setIsFormOpen} isOpen={isFormOpen} />
      <ModalMenu setIsOpen={setIsMenOpen} isOpen={isMenOpen} />
    </div>
  );
};

export default LeftContent;
