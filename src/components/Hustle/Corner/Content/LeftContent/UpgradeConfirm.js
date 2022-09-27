import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Modal from '../../../../shared/Modal';

const UpgradeConfirm = ({ isOpen, setIsOpen, onConfirm, onCancel }) => {
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
        <>
          <div className='flex justify-between items-center mb-2'>
            <h2 className='px-5 py-2 font-Inter text-center text-2xl font-bold text-olive'>
              Are you sure?
            </h2>
            <FaTimes
              className='text-olive text-2xl block hover:cursor-pointer'
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div className='flex gap-2 justify-center'>
            <button className='btn btn-default' onClick={onConfirm}>
              Yes
            </button>
            <button className='btn btn-default' onClick={onCancel}>
              No
            </button>
          </div>
          <p className=' text-olive text-center mt-2'>
            This will cost $1111 to skip this time
          </p>
        </>
      </div>
    </Modal>
  );
};

export default UpgradeConfirm;
