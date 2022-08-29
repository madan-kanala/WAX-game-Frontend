import React from 'react';
import Card from './Card';

const AllCards = () => {
  return (
    <>
      <div className='my-20'>
        <div className='container mx-auto'>
          <h2 className='text-2xl font-bold mb-3 ml-2'>Game Assets</h2>
          <div className='sm:flex flex-wrap gap-y-10'>
            {[1, 2, 3, 4, 5].map(() => (
              <Card key={Math.random()} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCards;
