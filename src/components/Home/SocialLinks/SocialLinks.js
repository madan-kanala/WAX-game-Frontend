import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTelegramPlane,
  FaTwitch,
  FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ITEMS = [
  {
    url: '/',
    icon: <FaFacebook />,
  },
  {
    url: '/',
    icon: <FaLinkedinIn />,
  },
  {
    url: '/',
    icon: <FaInstagram />,
  },
  {
    url: '/',
    icon: <FaSkype />,
  },
  {
    url: '/',
    icon: <FaTwitter />,
  },
  {
    url: '/',
    icon: <FaSkype />,
  },
  {
    url: '/',
    icon: <FaTwitter />,
  },
  {
    url: '/',
    icon: <FaTelegramPlane />,
  },
  {
    url: '/',
    icon: <FaTwitch />,
  },
  {
    url: '/',
    icon: <FaBehance />,
  },
];

const SocialLinks = () => {
  return (
    <div className='bg-black pt-10 pb-5'>
      <div className='container mx-auto'>
        <ul className='flex justify-center gap-3'>
          {ITEMS.map((item) => (
            <Item key={Math.random()} element={item.icon} url={item.url} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const randomColor = () => {
  const COLORS = [
    'bg-black',
    'bg-red-500',
    'bg-red-700',
    'bg-red-900',
    'bg-orange-500',
    'bg-orange-700',
    'bg-orange-900',
    'bg-orange-500',
    'bg-orange-700',
    'bg-orange-900',
    'bg-amber-500',
    'bg-amber-700',
    'bg-amber-900',
    'bg-yellow-500',
    'bg-yellow-700',
    'bg-yellow-900',
    'bg-lime-500',
    'bg-lime-700',
    'bg-lime-900',
    'bg-green-500',
    'bg-green-700',
    'bg-green-900',
    'bg-emerald-500',
    'bg-emerald-700',
    'bg-emerald-900',
    'bg-teal-500',
    'bg-teal-700',
    'bg-teal-900',
    'bg-sky-500',
    'bg-sky-700',
    'bg-sky-900',
    'bg-blue-500',
    'bg-blue-700',
    'bg-blue-900',
    'bg-indigo-500',
    'bg-indigo-700',
    'bg-indigo-900',
    'bg-purple-500',
    'bg-purple-700',
    'bg-purple-900',
    'bg-fuchsia-500',
    'bg-fuchsia-700',
    'bg-fuchsia-900',
    'bg-pink-500',
    'bg-pink-700',
    'bg-pink-900',
    'bg-rose-500',
    'bg-rose-700',
    'bg-rose-900',
  ];

  const index = Math.ceil(Math.random() * (COLORS.length - 1));

  return COLORS[index];
};

const Item = ({ element, url }) => {
  return (
    <Link
      to={url}
      className={` ${randomColor()} rounded-full p-3 text-2xl text-white cursor-pointer`}
    >
      {element}
    </Link>
  );
};

export default SocialLinks;
