import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Modal from '../../../../shared/Modal';

const Stats = ({ isOpen, setIsOpen }) => {
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
        <div>
          <div className='flex justify-between items-center mb-2'>
            <h2 className='px-5 py-2 font-Inter text-center text-2xl font-bold text-olive'>
              Upgrade Character
            </h2>
            <FaTimes
              className='text-olive text-2xl block hover:cursor-pointer'
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </div>

          <div>
            <div className='mt-2'>
              <Item text={'Name'} value={''} />
              <Item text={'Rarity'} value={''} />
              <Item text={'Level'} value={''} />
              <Item text={'Edition'} value={''} />
              <Item text={'Hustling'} value={''} />
              <Item text={'Collected Dc'} value={''} />
              <p className='mt-3 text-primary font-bold'>Attributes</p>
              <Item text={'Strength'} value={''} />
              <Item text={'Hustlers Ambition'} value={''} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const Item = ({ text, value }) => (
  <p className='text-primary'>
    <span className='text-primary '>{text}:</span> {'  '} {value}
  </p>
);

export default Stats;
