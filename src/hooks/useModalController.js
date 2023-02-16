import React from 'react';

const bodyElment = document.getElementsByTagName('body')[0];
const OVERFLOW = 'overflow';

function useModalController(modalName = '') {
   const [ modal, setModal ] = React.useState(modalName);

   const handleModalOpen = modalName => {
      setModal(modalName); 
      bodyElment.classList.add(OVERFLOW);
   };

   const handleModalClose = () => {
      setModal('');
      bodyElment.classList.remove(OVERFLOW);
   };

   return {
      modal,
      handleModalOpen,
      handleModalClose,
   }
};

export default useModalController;