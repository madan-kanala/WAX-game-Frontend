import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Modal from '../../../../shared/Modal';
import UpgradeForm from './UpgradeForm';

const ModalMenu = ({ isOpen, setIsOpen }) => {
  const [isUpGradeOpen, setIsUpgradeOpen] = useState(false);
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <div
          className='w-full py-4 px-6 bg-black rounded-md'
          style={{ boxShadow: '#a5a5a5eb 0px 0px 9px 0px' }}
        >
          <div>
            <div className='flex justify-between items-center mb-2'>
              <h2 className='px-5 py-2 font-Inter text-center text-2xl font-bold text-olive'>
                Riley Level 3
              </h2>
              <FaTimes
                className='text-olive text-2xl block hover:cursor-pointer'
                onClick={() => setIsOpen(false)}
              />
            </div>

            <div className='text-center'>
              <div className='my-2'>
                <div className='text-end text-olive'>
                  <p>0.94</p>
                </div>
                <div className='btn btn-default rounded-md'>Collect Reward</div>
              </div>
              <div className='my-2'>
                <div className='text-end text-olive'>
                  <p>0.94</p>
                </div>
                <div
                  className='btn btn-default rounded-md'
                  onClick={() => setIsUpgradeOpen(true)}
                >
                  Upgrade
                </div>
              </div>
              <div className='my-2'>
                <div className='text-end text-olive'>
                  <p>0.94</p>
                </div>
                <div className='btn btn-default rounded-md'>Unstake</div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <UpgradeForm isOpen={isUpGradeOpen} setIsOpen={setIsUpgradeOpen} />
    </>
  );
};

export default ModalMenu;
