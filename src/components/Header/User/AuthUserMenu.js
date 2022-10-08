import React from 'react';
import icon2 from '../../../assets/images/icons/clean-cash.png';
import icon3 from '../../../assets/images/icons/hst-final.png';
import icon1 from '../../../assets/images/icons/hustler-clean-cash-token.png';
import icon4 from '../../../assets/images/icons/hwt.png';
const AuthUserMenu = () => {
  return (
    <div className='text-primary py-3'>
      <div>
        <p className='btn btn-default rounded-md'>Thedragon.gm</p>
        <div className='flex gap-x-2'>
          <Item icon={icon1} text='201' />
          <Item icon={icon2} text='201' />
        </div>
        <div className='flex gap-x-2'>
          <Item icon={icon3} text='201' />
          <Item icon={icon4} text='201' />
        </div>
      </div>
    </div>
  );
};

const Item = ({ icon, text }) => {
  return (
    <div className='flex items-center gap-x-2'>
      <div className='w-8'>
        <img src={icon} alt='' className='w-full h-full' />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default AuthUserMenu;
