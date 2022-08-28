import React, { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
const AuthMenu = () => {
  const [isShow, setIsShow] = useState(false);

  const ref = useDetectClickOutside({ onTriggered: () => setIsShow(false) });
  return (
    <div className='text-white' ref={ref}>
      <div className='relative'>
        <button
          className='font-Inter border rounded-full px-5 py-2 font-bold tracking-widest  flex items-center cursor-pointer transition-all duration-300'
          type='button'
        >
          Sign In
          <p onClick={() => setIsShow(true)} className='hover:text-blue-400'>
            <svg
              class='ml-2 w-4 h-4'
              aria-hidden='true'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M19 9l-7 7-7-7'
              ></path>
            </svg>
          </p>
        </button>

        <div
          id='dropdown'
          class={`'z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 block ${
            isShow ? 'block' : 'hidden'
          }`}
          style={{
            position: 'absolute',
            inset: '0px auto auto 0px',
            margin: 0,
            transform: 'translate(-47px, 47px)',
          }}
        >
          <ul
            class='py-1 text-sm text-gray-700 dark:text-gray-200'
            aria-labelledby='dropdownDefault'
          >
            <li>
              <a
                href='/'
                class='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href='/'
                class='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href='/'
                class='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href='/'
                class='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuthMenu;
