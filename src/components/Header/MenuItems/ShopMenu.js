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
          className={` capitalize cursor-pointer hover:text-blue-400 font-Inter text-lg font-semibold tracking-wide ${
            isShow ? 'text-blue-500' : 'text-white'
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
