import React from 'react';

import { useModalContext } from 'hooks/useModalContext';
import { ModalBackDrop } from 'component/molecules';

const ALERT_MODAL = 'alert_modal';

const Modal = ({ children }) => {
   const { modal, handleModalClose } = useModalContext();

   return (
      <>
         { 
            modal 
            && 
            <ModalBackDrop closeModal={handleModalClose}>
               <div className='modal_content_box' onClick={e => e.stopPropagation()}>
               
               </div>
            </ModalBackDrop>
         }
      </>
   )
};

export default Modal;