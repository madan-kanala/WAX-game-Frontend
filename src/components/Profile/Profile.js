import React from 'react';
import Information from './Information';
import ProfileTable from './ProfileTable';

const Profile = () => {
  return (
    <div className=''>
      <div className='md:flex'>
        <Information />
        <ProfileTable />
      </div>
    </div>
  );
};

export default Profile;
