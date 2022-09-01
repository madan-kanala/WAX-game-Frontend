import React from 'react';

const ProfileImageUpload = ({ setImage }) => {
  return (
    <div className='mx-2 mb-4 bg-olive p-4 rounded-md'>
      <div className='mb-2'>
        <label
          for='file'
          className='block text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Select Picture.
        </label>
        <input
          type='file'
          id='file'
          className='bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 '
          onChange={(e) => {
            setImage(URL.createObjectURL(e.target.files[0]));
          }}
        />
      </div>
      <div className='text-right'>
        <button className=' text-white outline-none bg-money-green hover:bg-money-green focus:ring-money-green font-medium rounded-lg text-base px-3 py-1 mr-2 mb-2 dark:bg-money-green dark:hover:bg-primary focus:outline-none dark:focus:ring-money-green'>
          Upload
        </button>
      </div>
    </div>
  );
};

export default ProfileImageUpload;
