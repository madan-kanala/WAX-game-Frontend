import React, { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { FaCog } from 'react-icons/fa';
import logoutIcon from '../../assets/images/icons/logout.png';
import DropDown from '../shared/DropDown/DropDown';
import GearMenus from './GearMenus';
import SignInMenus from './SignInMenus';
import AuthUserMenu from './User/AuthUserMenu';

const AuthMenu = ({ isAuthenticated, setIsAuthenticated }) => {
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
      {isAuthenticated ? (
        <AuthUserMenu />
      ) : (
        <div className='text-white hidden md:block' ref={ref}>
          <DropDown
            isShow={isShowAuthMenu}
            onClose={setIsShowAuthMenu}
            element={
              <SignInMenus
                onSubmit={setIsShowAuthMenu}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
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
      )}
      <div className='flex flex-col gap-x-2 justify-center items-center'>
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
        {isAuthenticated && (
          <div
            className='w-4 mt-3 ml-2 cursor-pointer'
            onClick={() => setIsAuthenticated(false)}
          >
            <img src={logoutIcon} className='w-full h-full' alt='' />
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthMenu;
