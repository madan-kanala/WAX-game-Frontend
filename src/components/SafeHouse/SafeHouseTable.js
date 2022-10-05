import Tippy from '@tippyjs/react';
import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import data from './data1.json';
import UnlockModal from './Unlock/UnlockModal';

const SafeHouseTable = () => {
  return (
    <div className='md:w-8/12'>
      <div className='mx-2 data122'>
        <div
          className='overflow-x-auto relative w-full border border-gray-700 rounded-md '
          style={{ boxShadow: '#a5a5a5eb 0px 0px 9px 0px' }}
        >
          <div className='bg-black text-olive text-center py-2'>
            <div className='flex justify-center gap-x-1'>
              <h2 className='text-2xl mb-2 md:text-3xl font-bold'>
                G rank mission
              </h2>
              <InfoIcon />
            </div>
            <p className='text-base mb-3'>
              Complete the missions by collecting G Ranks and activating the
              missions to gain bonus
            </p>
          </div>
          <table className='w-full text-sm text-left text-olive dark:text-gray-400 table '>
            <thead className='text-sm  uppercase text-olive bg-black dark:bg-gray-700 dark:text-gray-400 border-t border-gray-700'>
              <tr>
                <th scope='col' className='py-3 px-6 w-1/12'></th>
                <th scope='col' className='py-3 px-6 w-2/12'>
                  Activation Cost
                </th>
                <th scope='col' className='py-3 px-6 w-1/12'>
                  Bonus
                </th>
                <th scope='col' className='py-3 px-6'>
                  G Rank Mission
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <Item
                  key={item.id}
                  bonus={item.bonus}
                  count={item.count}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const InfoIcon = () => (
  <Tippy
    content={
      <span>
        Each account can accrued up to +5% bonus reward for every location
      </span>
    }
    popperOptions={{
      placement: 'right',
    }}
  >
    <p className='text-blue-500 text-xl'>
      <FaInfoCircle />
    </p>
  </Tippy>
);

const Item = ({ bonus, count, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <UnlockModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <tr className='bg-gray-800 border-b border-gray-700 dark:bg-gray-800 dark:border-gray-700 w-full'>
        <td className='text-center'>M{index}</td>
        <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
          <button
            className='btn btn-profile font-medium rounded-lg mr-2 mb-2 '
            onClick={() => setIsOpen(true)}
          >
            Active
          </button>
        </td>
        <td class='py-4 px-6'>
          {bonus > 0 ? `+` : ''}
          {bonus}%
        </td>
        <td class='py-4 px-6 w-6/12'>
          <div className='w-full bg-gray-600 rounded-full dark:bg-gray-700'>
            <div className='bg-profile-green text-xs font-medium text-black text-center p-0.5 py-1 leading-none rounded-full w-8/12'>
              {count}
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default SafeHouseTable;
