import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import ANCHOR_WALLET from '../../assets/images/wallet/ANCHOR_WALLET.png';
import WAX_CLOUD_WALLET from '../../assets/images/wallet/WAX_CLOUD_WALLET.png';
import WOMBAT_WALLET from '../../assets/images/wallet/WOMBAT_WALLET.png';
const MENUS = [
  {
    value: '1',
    text: 'Anchor Wallet',
    icon: ANCHOR_WALLET,
  },
  {
    value: '2',
    text: 'Anchor Cloud Wallet',
    icon: WAX_CLOUD_WALLET,
  },
  {
    value: '3',
    text: 'Wombat Wallet',
    icon: WOMBAT_WALLET,
  },
];
const SignInMenus = () => {
  return (
    <div class='p-4 text-sm text-olive bg-black custom-shadow'>
      <div>
        <p>Please Select your wallet to login</p>

        <div className='mt-4'>
          {MENUS.map((i) => (
            <Item key={Math.random()} text={i.text} icon={i.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Item = ({ icon, text }) => {
  return (
    <div className='flex justify-between items-center btn btn-default mb-5 pr-3 rounded-md overflow-hidden py-1 pl-2 hover:cursor-pointer'>
      <IconImage url={icon} />
      <p className='text-white'>{text}</p>
      <div className='text-white'>
        <FaChevronRight />
      </div>
    </div>
  );
};

const IconImage = ({ url }) => {
  return (
    <div className='w-10 h-10'>
      <img
        src={url}
        className='w-full h-full object-contain'
        alt=''
        srcset=''
      />
    </div>
  );
};

export default SignInMenus;
