import React from 'react';
const MENUS = [
  {
    value: '1',
    label: 'wax1.greymass.com',
  },
  {
    value: '2',
    label: 'wax2.greymass.com',
  },
  {
    value: '3',
    label: 'wax3.greymass.com',
  },
];
const SignInMenus = () => {
  return (
    <div class='p-4 text-sm text-gray-700 dark:text-gray-200'>
      <div>
        <p>Please Select your wallet to login</p>

        <select
          id='countries'
          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        >
          {MENUS.map(({ label, value }) => (
            <option value={value}>{label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SignInMenus;
