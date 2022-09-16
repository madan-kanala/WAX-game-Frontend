import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
const Content = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-start pb-6 justify-between'>
        <LeftContent />
        {/* <MiddleContent /> */}
        <RightContent />
      </div>
    </div>
  );
};

export default Content;
