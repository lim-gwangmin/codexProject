import React from 'react';

const bodyElment = document.getElementsByTagName('body')[0];
const OVERFLOW = 'overflow';

function useModalController(modalName = '') {
   const [ modal, setModal ] = React.useState(modalName);
   const [ alertModal, setAlertModal ] = React.useState(false);

   const handleModalOpen = React.useCallback( modalName => {
      setModal(modalName); 
      bodyElment.classList.add(OVERFLOW);
   }, [modal]);

   const handleModalClose = React.useCallback(() => {
      setModal('');
      bodyElment.classList.remove(OVERFLOW);
   }, [modal]);

   const handleAlertModalToggle = React.useCallback(() => {
      setAlertModal(!alertModal); 
      bodyElment.classList.add(OVERFLOW);
   }, [alertModal]);

   const handleAlertModalClose = React.useCallback(() => {
      setAlertModal(false);
      bodyElment.classList.remove(OVERFLOW);
   }, [alertModal]);

   return {
      modal,
      handleModalOpen,
      handleModalClose,
      alertModal,
      handleAlertModalToggle,
      handleAlertModalClose,
   }
};

export default useModalController;