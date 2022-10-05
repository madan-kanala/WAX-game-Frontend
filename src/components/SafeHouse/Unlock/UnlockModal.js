import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { v4 as uuid } from 'uuid';
import icon3 from '../../../assets/images/icons/hst-final.png';
import icon1 from '../../../assets/images/icons/hustler-clean-cash-token.png';
import icon2 from '../../../assets/images/icons/hwt.png';
import Modal from '../../shared/Modal';
const data = [
  {
    id: uuid(),
    icon: icon1,
    cost: '25000',
  },
  {
    id: uuid(),
    icon: icon2,
    cost: '15000',
  },
  {
    id: uuid(),
    icon: icon3,
    cost: '1000',
  },
];

const UnlockModal = ({ isOpen, setIsOpen }) => {
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
              Unlock Bonus
            </h2>
            <FaTimes
              className='text-olive text-2xl block hover:cursor-pointer'
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div className='flex justify-center'>
            <div>
              {data.map((item) => (
                <div className='flex  gap-x-3 items-center' key={Math.random()}>
                  <div className='w-12'>
                    <img
                      src={item.icon}
                      className='w-full h-full object-contain'
                      alt=''
                    />
                  </div>
                  <p className='text-olive font-bold'>{item.cost}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-center mt-5'>
            <button className='btn btn-profile rounded'>Activate</button>
          </div>
        </>
      </div>
    </Modal>
  );
};

export default UnlockModal;
