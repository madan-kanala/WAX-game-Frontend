import React, { useState } from 'react';
import ProfileImageUpload from './ProfileImageUpload';

const Information = () => {
  const [image] = useState(
    'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600'
  );
  return (
    <div className='md:w-4/12 mb-4 md:mb-0'>
      <ProfileImageUpload />
      <div className='p-8 bg-olive mr-2 text-xl rounded-md mx-2'>
        <div className='flex'>
          <div className='w-4/12'>
            <div className='w-full aspect-square rounded overflow-hidden pr-3'>
              <img
                class='w-full he-full object-cover'
                src={image}
                alt='Extra large avatar'
              />
            </div>
          </div>
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
        </div>

        <div className='my-4'>
          <span className='font-bold'> Stats: </span>
          <div className='text-base h-12'>
            {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur temporibus voluptates numquam fugiat labore alias eum,
            suscipit provident, sequi nam asperiores obcaecati veritatis
            quibusdam quod quas similique accusantium facilis est! */}
          </div>
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
