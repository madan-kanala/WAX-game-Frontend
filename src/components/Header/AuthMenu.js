import React, { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { FaCog } from 'react-icons/fa';
import DropDown from '../shared/DropDown/DropDown';
import GearMenus from './GearMenus';
import SignInMenus from './SignInMenus';

const AuthMenu = () => {
  const [isShowAuthMenu, setIsShowAuthMenu] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const ref = useDetectClickOutside({
    onTriggered: () => setIsShowAuthMenu(false),
  });
  const ref2 = useDetectClickOutside({
    onTriggered: () => setIsShow(false),
  });
  return (
    <div className='flex items-center gap-x-2'>
      <div className='text-white hidden md:block' ref={ref}>
        <DropDown
          isShow={isShowAuthMenu}
          onClose={setIsShowAuthMenu}
          element={<SignInMenus onSubmit={setIsShowAuthMenu} />}
          width={300}
          left={-(300 - 150)}
        >
          <button
            className={`text-transparent bg-clip-text bg-gradient-to-r hover:text-money-green font-Inter border border-primary rounded-full px-5 py-2 font-bold tracking-widest  flex items-center cursor-pointer transition-all duration-300 ${
              isShowAuthMenu ? 'text-money-green' : 'from-primary to-primary'
            }`}
            type='button'
            onClick={() => setIsShowAuthMenu(!isShowAuthMenu)}
          >
            Login
          </button>
        </DropDown>
      </div>

      <div className='text-white hidden md:block' ref={ref2}>
        <DropDown
          width={300}
          isShow={isShow}
          onClose={setIsShow}
          left={-(300 - 90)}
          element={<GearMenus />}
        >
          <p
            className={`hover:text-money-green ${
              isShow ? 'text-money-green' : 'text-primary'
            }`}
            onClick={() => setIsShow((p) => !p)}
          >
            <FaCog className='ml-2' />
          </p>
        </DropDown>
      </div>
    </div>
  );
};

export default AuthMenu;
