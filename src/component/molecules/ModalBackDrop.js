function ModalBackDrop({ children, closeModal } ) {
   return (
      <div className='modal_background' onClick={closeModal}>
         { children }
      </div>
   );
};


export default ModalBackDrop;