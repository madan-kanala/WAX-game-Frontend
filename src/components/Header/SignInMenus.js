import React from 'react';
import {
  FaAdn,
  FaAffiliatetheme,
  FaAutoprefixer,
  FaChevronRight,
} from 'react-icons/fa';
const MENUS = [
  {
    value: '1',
    text: 'wax1.greymass.com',
    icon: <FaAdn />,
  },
  {
    value: '2',
    text: 'wax2.greymass.com',
    icon: <FaAffiliatetheme />,
  },
  {
    value: '3',
    text: 'wax3.greymass.com',
    icon: <FaAutoprefixer />,
  },
];
const SignInMenus = () => {
  return (
    <div class='p-4 text-sm text-gray-700 dark:text-gray-200'>
      <div>
        <p>Please Select your wallet to login</p>

        <div className='mt-4'>
          {MENUS.map((i) => (
            <Item key={Math.random()} text={i.text} icon={i.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Item = ({ icon, text }) => {
  return (
    <div className='flex justify-between items-center bg-indigo-900 mb-5 pr-3 rounded-md overflow-hidden'>
      <div className='bg-blue-500 text-white py-3 px-3 text-xl'>{icon}</div>
      <p className='text-white'>{text}</p>
      <div className='text-white'>
        <FaChevronRight />
      </div>
    </div>
  );
};

export default SignInMenus;
