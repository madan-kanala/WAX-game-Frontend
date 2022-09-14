import React from 'react';

const Information = () => {
  return (
    <div
      className='p-8 bg-black mr-2 text-xl rounded-md mx-2 '
      style={{ boxShadow: '#a5a5a5eb 0px 0px 9px 0px' }}
    >
      <div className=''>
        <div className='flex flex-col gap-y-1 '>
          <p className='text-olive'>
            <span className='text-olive font-bold'>Name:</span> Jhon Doe
          </p>
          <p className='text-olive'>
            <span className='text-olive font-bold'>Gender:</span> Male
          </p>
          <p className='text-olive'>
            <span className='text-olive font-bold'>G-Rank:</span> 3231
          </p>
        </div>
      </div>

      <div className='my-4'>
        <span className='text-olive font-bold'> Stats: </span>
        <div className='text-base h-12'>
          {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur temporibus voluptates numquam fugiat labore alias eum,
            suscipit provident, sequi nam asperiores obcaecati veritatis
            quibusdam quod quas similique accusantium facilis est! */}
        </div>
      </div>
      <div className='mt-2'>
        <p className='text-olive'>
          <span className='text-olive font-bold'> Total successful drops:</span>{' '}
          0
        </p>
        <p className='text-olive'>
          <span className='text-olive font-bold'> Time spent in jail:</span> 0
        </p>
        <p className='text-olive'>
          <span className='text-olive font-bold'> successful invasions:</span> 0
        </p>
      </div>
    </div>
  );
};

export default Information;
