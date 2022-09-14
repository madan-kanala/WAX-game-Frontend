import React from 'react';
import Modal from '../../shared/Modal';

const AddForm = ({ isOpen, setIsOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      //   className='w-8/12'
    >
      <div className='w-full bg-blue-400 p-5'>
        <form>
          <h2 className='px-5 py-2 font-Inter text-center text-2xl font-bold'>
            Add Slot
          </h2>

          <div>
            <div className='text-end text-olive'>
              <p>0.94</p>
            </div>
            <div className='flex bg-white justify-between py-2 px-1.5 rounded-md items-center'>
              <input
                type='text'
                name=''
                className=' bg-white border-none outline-none px-2 py-2'
                placeholder='insert amount'
                id=''
              />
              <p className='pr-7 pl-2'>HDC</p>
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
                className=' bg-white border-none outline-none pl-4 py-2'
                placeholder='insert amount'
                id=''
              />
              <p className='pr-7 pl-2 bg-white py-2 rounded-md '>HCC</p>
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
                className=' bg-white border-none outline-none pl-4 py-2'
                placeholder='insert amount'
                id=''
              />
              <p className='pr-7 pl-2 bg-white py-2 rounded-md '>HT</p>
            </div>
          </div>
          <div className='flex justify-center mt-5'>
            <button
              type='button'
              className='px-5 py-2 font-Inter bg-olive rounded-sm'
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
