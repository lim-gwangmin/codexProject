import React from 'react';

const bodyElment = document.getElementsByTagName('body')[0];
const OVERFLOW = 'overflow';

function useModalController(modalName = '') {
   const [ modal, setModal ] = React.useState(modalName);

   const handleModalOpen = React.useCallback( modalName => {
      setModal(modalName); 
      bodyElment.classList.add(OVERFLOW);
   }, [modal]);

   const handleModalClose = React.useCallback(() => {
      setModal('');
      bodyElment.classList.remove(OVERFLOW);
   }, [modal]);

   return {
      modal,
      handleModalOpen,
      handleModalClose,
   }
};

export default useModalController;