import React from 'react';

const ProfileImageUpload = () => {
  return (
    <div className='mx-2 mb-4'>
      <div class='mb-2'>
        <label
          for='file'
          class='block text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Upload Profile Picture.
        </label>
        <input
          type='file'
          id='file'
          class='bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 '
        />
      </div>
      <button className='text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-base px-3 py-1 mr-2 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800'>
        Upload
      </button>
    </div>
  );
};

export default ProfileImageUpload;
