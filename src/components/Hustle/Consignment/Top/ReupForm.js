import React, { useMemo, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import icon2 from '../../../../assets/images/icons/hustler-dirty-cash-token.png';
import icon1 from '../../../../assets/images/icons/wallet.png';
import icon3 from '../../../../assets/images/icons/work.png';
import Modal from '../../../shared/Modal';

const RATE = 40;

const ReUpForm = ({ isOpen, setIsOpen }) => {
  const [amount] = useState(10);
  const [amountInWallet] = useState(3000);

  const [input, setInput] = useState('');

  const exchangedAmount = useMemo(() => {
    if (!input) return '';
    return parseFloat(input) * RATE;
  }, [input]);

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
            <h2 className='px-5 py-2 font-Inter text-center text-2xl font-bold text-primary'>
              Re-up
            </h2>
            <FaTimes
              className='text-primary text-2xl block hover:cursor-pointer'
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className='text-primary text-center'>
            <p>Exchange Rate</p>
            <p>
              {RATE / 160} Dirty Cash = {amount} Work
            </p>
          </div>
          <div>
            <div className=' text-primary gap-x-2 flex justify-end items-center'>
              <p className='mt-2'>{amountInWallet}</p>
              <div className='w-14 h-10'>
                <img src={icon1} alt='' className='w-full h-full object-' />
              </div>
            </div>
            <div className='flex bg-olive justify-between py-2 px-1.5 rounded-md items-center'>
              <input
                type='text'
                name=''
                className=' flex-1 bg-transparent border-none outline-none px-2 py-2'
                placeholder='insert amount'
                id=''
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <p className='w-16 pl-2.5 '>
                <img src={icon2} alt='' className='w-full h-full object-' />
              </p>
            </div>
          </div>
          <div className='mt-4'>
            <div className='text-left text-white '>
              <p>You will receive:</p>
            </div>
            <div className='flex bg-olive justify-between py-2 px-1.5 rounded-md items-center'>
              <input
                type='text'
                name=''
                className='flex-1 bg-transparent border-none outline-none pl-4 py-2'
                placeholder='insert amount'
                readOnly
                value={exchangedAmount}
              />
              <p className='w-16 pl-2.5  rounded-md '>
                <img src={icon3} alt='' className='w-full h-full object-' />
              </p>
            </div>
          </div>

          <div className='flex justify-center mt-5'>
            <button className='btn btn-default rounded'>Re-up</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ReUpForm;
