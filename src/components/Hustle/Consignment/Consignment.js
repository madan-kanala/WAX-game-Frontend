import React from 'react';
import Content from './Content';
import Top from './Top';

const Consignment = () => {
  return (
    <div className='bg-black py-4 md:min-h-screen'>
      <div className='container mx-auto '>
        <Top />
        <Content />
      </div>
    </div>
  );
};

export default Consignment;
