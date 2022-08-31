import React from 'react';
import LeftContent from './LeftContent';
import MiddleContent from './MiddleContent';
import RightContent from './RightContent';
const Content = () => {
  return (
    <div>
      <div className='flex items-center '>
        <LeftContent />
        <MiddleContent />
        <RightContent />
      </div>
    </div>
  );
};

export default Content;
