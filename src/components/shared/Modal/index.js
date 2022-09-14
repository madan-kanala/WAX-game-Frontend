import React from 'react';
import ModalC from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '450px',
    padding: 0,
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ModalC.setAppElement('body');

function Modal(props) {
  return (
    <>
      <ModalC style={customStyles} {...props}>
        {props.children}
      </ModalC>
    </>
  );
}

export default Modal;
