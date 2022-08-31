import React, { useState } from 'react';
import DropDown from '../../shared/DropDown/DropDown';
import Menus from './Menus';

const ShopMenu = () => {
  const [isShow, setIsShow] = useState(false);

  const menusList = [
    {
      id: 1,
      label: 'Pack Shop',
      url: '/pack-shop',
    },
    {
      id: 2,
      label: 'Booster Shop',
      url: '/booster-shop',
    },
  ];

  return (
    <DropDown
      isShow={isShow}
      onClose={setIsShow}
      element={<Menus list={menusList} />}
    >
      <div type='button'>
        <div
          className={`text-transparent bg-clip-text bg-gradient-to-r capitalize cursor-pointer hover:text-money-green font-Inter text-lg font-bold tracking-wide ${
            isShow ? 'text-money-green' : 'from-white to-white'
          }`}
          onClick={(e) => {
            e.preventDefault();
            setIsShow(true);
          }}
        >
          Shop
        </div>
      </div>
    </DropDown>
  );
};

export default ShopMenu;
