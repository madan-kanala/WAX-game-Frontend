import React from 'react';
import image1 from '../../assets/images/hustle/safehouse.png';
import LeftSide from './LeftSide';
import SafeHouseTable from './SafeHouseTable';

const SafeHouse = () => {
  return (
    <div className=''>
      <div className='img flex justify-center'>
        <img src={image1} alt='' />
      </div>
      <div className='md:flex'>
        <LeftSide />
        <SafeHouseTable />
      </div>
    </div>
  );
};

export default SafeHouse;
