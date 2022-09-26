import React, { useState } from 'react';
import AddForm from './AddForm';
import Character from './Character';
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
        <div className='text-center box-border py-8 px-3 border rounded-md h-80 overflow-y-auto overflow-x-hidden p-8 bg-black mr-2 custom-shadow '>
          <div className='flex justify-center gap-4 flex-wrap'>
            {[1].map((i) => (
              <Character key={i} />
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
