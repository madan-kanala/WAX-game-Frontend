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
          className={`text-transparent bg-clip-text bg-gradient-to-r hover:text-money-green font-Inter border border-primary rounded-full px-5 py-2 font-bold tracking-widest  flex items-center cursor-pointer transition-all duration-300 ${
            isShow ? 'text-money-green' : 'from-primary to-primary'
          }`}
          type='button'
          onClick={() => setIsShow(!isShow)}
        >
          Sign In
          <p
            className={`hover:text-money-green ${
              isShow ? 'text-money-green' : 'text-primary'
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
