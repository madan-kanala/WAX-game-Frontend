import React from 'react';
import LeftContent from './LeftContent';
import MiddleContent from './MiddleContent';
import RightContent from './RightContent';
const Content = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-start pb-6'>
        <LeftContent />
        <MiddleContent />
        <RightContent />
      </div>
    </div>
  );
};

export default Content;
