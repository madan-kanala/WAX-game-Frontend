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
const GearMenus = () => {
  return (
    <div class='p-4 text-sm bg-black custom-shadow'>
      <div>
        <p>Select RPC EndPoint</p>

        <select
          id='countries'
          class='btn btn-default w-full rounded-md custom-shadow border-none mt-3'
        >
          {MENUS.map(({ label, value }) => (
            <option className='bg-black' value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default GearMenus;
