import React from 'react';
import data from './data1.json';

const ProfileTable = () => {
  return (
    <div className='md:w-8/12'>
      <div className='mx-2 data122'>
        <div
          className='overflow-x-auto relative w-full border border-gray-700 rounded-md '
          style={{ boxShadow: '#a5a5a5eb 0px 0px 9px 0px' }}
        >
          <div className='bg-gray-900 text-olive text-center py-2'>
            <h2 className='text-2xl mb-2 md:text-3xl font-bold'>
              G rank mission
            </h2>
            <p className='text-xl mb-3'>
              Complete and unlock the mission to gain bonus{' '}
            </p>
          </div>
          <table className='w-full text-sm text-left text-olive dark:text-gray-400 table '>
            <thead className='text-sm  uppercase text-olive bg-gray-900 dark:bg-gray-700 dark:text-gray-400 border-t border-gray-700'>
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

const Item = ({ bonus, count, index }) => {
  return (
    <tr className='bg-gray-800 border-b border-gray-700 dark:bg-gray-800 dark:border-gray-700 w-full'>
      <td className='text-center'>M{index}</td>
      <td className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
        <button
          type='button'
          className='text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-3 py-1 mr-2 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800'
        >
          Unlock 5 HCC
        </button>
      </td>
      <td class='py-4 px-6'>
        {bonus > 0 ? `+` : ''}
        {bonus}%
      </td>
      <td class='py-4 px-6 w-6/12'>
        <div className='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
          <div className='bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 py-1 leading-none rounded-full w-full'>
            {count}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ProfileTable;
