import React from 'react';

const Information = () => {
  return (
    <div className='md:w-4/12'>
      <div className='p-3 shadow-lg shadow-slate-400 mr-2 text-xl'>
        <div className='flex flex-col gap-y-1 '>
          <p>
            <span className='font-bold'>Name:</span> Jhon Doe
          </p>
          <p>
            <span className='font-bold'>Gender:</span> Male
          </p>
          <p>
            <span className='font-bold'>G-Rank:</span> 3231
          </p>
        </div>
        <div className='my-4'>
          <span className='font-bold'> Stats: </span>
          <span className='text-base'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur temporibus voluptates numquam fugiat labore alias eum,
            suscipit provident, sequi nam asperiores obcaecati veritatis
            quibusdam quod quas similique accusantium facilis est!
          </span>
        </div>
        <div className='mt-2'>
          <p>
            <span className='font-bold'> Total successful drops:</span> 0
          </p>
          <p>
            <span className='font-bold'> Time spent in jail:</span> 0
          </p>
          <p>
            <span className='font-bold'> successful invasions:</span> 0
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
