import React from 'react';
import image1 from '../../assets/images/profile/profile v2.png';
import LeftSide from './LeftSide';
import ProfileTable from './ProfileTable';

const Profile = () => {
  return (
    <div className=''>
      <div className='img flex justify-center'>
        <img src={image1} alt='' />
      </div>
      <div className='md:flex'>
        <LeftSide />
        <ProfileTable />
      </div>
    </div>
  );
};

export default Profile;
