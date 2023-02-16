import React from 'react';

import { useModalContext } from 'hooks/useModalContext';

const ALERT_MODAL = 'alert_modal';



const ModalBody = ({ children }) => {
   return (
      <div className='modal_body'>
         { children }
      </div>
   )
};

const ModalHeader = ({ children }) => {
   return (
      <div className='modal_header'>
         { children }
      </div>
   );
};

const ModalContent = ({ children }) => {
   return (
      <div className='modal_content_box' onClick={e => e.stopPropagation()}>
         { children }
      </div>
   )
};

const ModalAlertContent = ({ children }) => {
   return (
      <div 
      className='modal_alert_content_box'
      onClick={e => e.stopPropagation()}>
         { children }
      </div>
   )
};

const Modal = ({ children }) => {
   const { modal, handleModalClose } = useModalContext();

   return (
      <div 
         className={`modal_background ${modal ? 'active' : ''}`}
         onClick={handleModalClose}
      >
         { children }
      </div>
   );
};

Modal.Content = ModalContent;
Modal.AlertContent = ModalAlertContent;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;

export default Modal;