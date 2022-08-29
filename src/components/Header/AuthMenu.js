import React, { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { FaAngleDown } from 'react-icons/fa';
import DropDown from '../shared/DropDown/DropDown';
import Menus from './MenuItems/Menus';
const menusList = [
  {
    id: 1,
    label: 'RPC point selection',
    url: '/rpc-point-selection',
  },
  {
    id: 2,
    label: 'Logout',
    url: '/logout',
  },
];
const AuthMenu = () => {
  const [isShow, setIsShow] = useState(false);

  const ref = useDetectClickOutside({ onTriggered: () => setIsShow(false) });
  return (
    <div className='text-white' ref={ref}>
      <DropDown
        isShow={isShow}
        onClose={setIsShow}
        element={<Menus list={menusList} />}
      >
        <button
          className={`text-transparent bg-clip-text bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 font-Inter border rounded-full px-5 py-2 font-bold tracking-widest  flex items-center cursor-pointer transition-all duration-300 ${
            isShow ? 'from-purple-400 to-pink-600' : 'from-white to-white'
          }`}
          type='button'
          onClick={() => setIsShow(!isShow)}
        >
          Sign In
          <p
            className={`hover:text-pink-600" ${
              isShow ? 'text-pink-600' : 'text-white'
            }`}
          >
            <FaAngleDown className='ml-2' />
          </p>
        </button>
      </DropDown>
    </div>
  );
};

export default AuthMenu;
