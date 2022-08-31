import React from 'react';
import Card from './Card';

import image1 from '../../../assets/images/hst-final.png';
import image2 from '../../../assets/images/hustler-clean-cash-token.png';
import image3 from '../../../assets/images/hustler-dirty-cash-token.png';
import image4 from '../../../assets/images/hwt.png';

const AllCards = () => {
  return (
    <>
      <div className='py-20 bg-primary-300'>
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
    image: image1,
  },
  {
    id: 2,
    title: 'Token 2',
    price: 33,
    image: image2,
  },
  {
    id: 3,
    title: 'Token 3',
    price: 37,
    image: image3,
  },
  {
    id: 4,
    title: 'Token 4',
    price: 37,
    image: image4,
  },
];
