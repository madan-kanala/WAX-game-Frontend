import React from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';

/**
 *
 * @param {isShow: boolean , onClose: function , element: menuElements, children: children} param0
 * @returns
 */
const DropDown = ({ isShow, onClose, element, children }) => {
  const ref = useDetectClickOutside({ onTriggered: () => onClose(false) });
  return (
    <div ref={ref}>
      <div className='relative'>
        {children}

        <div
          id='dropdown'
          className={`z-[9999] w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 block ${
            isShow ? 'block' : 'hidden'
          }`}
          style={{
            position: 'absolute',
            inset: '0px auto auto 0px',
            margin: 0,
            transform: 'translate(-47px, 47px)',
          }}
        >
          {element}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
