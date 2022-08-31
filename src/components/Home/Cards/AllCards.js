import React from 'react';
import Card from './Card';

import image1 from '../../../assets/images/hst-final.png';
import image2 from '../../../assets/images/hustler-clean-cash-token.png';
import image3 from '../../../assets/images/hustler-dirty-cash-token.png';
import image4 from '../../../assets/images/hwt.png';

const AllCards = () => {
  return (
    <>
<<<<<<< HEAD
      <div className='py-20 bg-primary-300'>
=======
      <div className='py-20 bg-black'>
>>>>>>> bdcb0f73fb227be80448ed34d39db386cc1d7188
        <div className='container mx-auto'>
          <h2 className='text-2xl font-bold mb-3 ml-2'>Game Assets</h2>
          <div className='sm:flex flex-wrap gap-y-10'>
            {ALL_CARDS.map((item) => (
              <Card key={Math.random()} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCards;

const ALL_CARDS = [
  {
    id: 1,
    title: 'Token 1',
    price: 26,
<<<<<<< HEAD
    image: image1,
=======
    image:
      'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600',
>>>>>>> bdcb0f73fb227be80448ed34d39db386cc1d7188
  },
  {
    id: 2,
    title: 'Token 2',
    price: 33,
<<<<<<< HEAD
    image: image2,
=======
    image:
      'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=600',
>>>>>>> bdcb0f73fb227be80448ed34d39db386cc1d7188
  },
  {
    id: 3,
    title: 'Token 3',
    price: 37,
<<<<<<< HEAD
    image: image3,
=======
    image:
      'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600',
>>>>>>> bdcb0f73fb227be80448ed34d39db386cc1d7188
  },
  {
    id: 4,
    title: 'Token 4',
    price: 37,
<<<<<<< HEAD
    image: image4,
=======
    image:
      'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=600',
>>>>>>> bdcb0f73fb227be80448ed34d39db386cc1d7188
  },
];
