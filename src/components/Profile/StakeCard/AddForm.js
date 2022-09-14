import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Modal from '../../shared/Modal';

const AddForm = ({ isOpen, setIsOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      //   className='w-8/12'
    >
      <div
        className='w-full py-4 px-6 bg-black rounded-md'
        style={{ boxShadow: '#a5a5a5eb 0px 0px 9px 0px' }}
      >
        <form>
          <div className='flex justify-between items-center mb-2'>
            <h2 className='px-5 py-2 font-Inter text-center text-2xl font-bold text-olive'>
              Add Slot
            </h2>
            <FaTimes
              className='text-olive text-2xl block hover:cursor-pointer'
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div>
            <div className='text-end text-olive'>
              <p>0.94</p>
            </div>
            <div className='flex bg-olive justify-between py-2 px-1.5 rounded-md items-center'>
              <input
                type='text'
                name=''
                className=' flex-1 bg-transparent border-none outline-none px-2 py-2'
                placeholder='insert amount'
                id=''
              />
              <p className='w-16 pl-2.5 '>HDC</p>
            </div>
          </div>
          <div className='mt-2'>
            <div className='text-end text-olive '>
              <p>8019.02</p>
            </div>
            <div className='flex bg-olive justify-between py-2 px-1.5 rounded-md items-center'>
              <input
                type='text'
                name=''
                className='  flex-1 bg-transparent border-none outline-none pl-4 py-2'
                placeholder='insert amount'
                id=''
              />
              <p className='w-16 pl-2.5  py-2 rounded-md '>HCC</p>
            </div>
          </div>
          <div className='mt-2'>
            <div className='text-end text-olive '>
              <p>8019.02</p>
            </div>
            <div className='flex bg-olive justify-between py-2 px-1.5 rounded-md items-center'>
              <input
                type='text'
                name=''
                className='  border-none outline-none pl-4 py-2 flex-1 bg-transparent'
                placeholder='insert amount'
                id=''
              />
              <p className='w-16 pl-2.5  py-2 rounded-md '>HT</p>
            </div>
          </div>
          <div className='flex justify-center mt-5'>
            <button
              type='button'
              className='px-5 py-2 font-Inter bg-money-green text-olive rounded-sm'
            >
              Add Slot
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddForm;
