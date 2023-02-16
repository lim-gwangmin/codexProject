import { ModalProvider } from "hooks/useModalContext";
import useModalController from "hooks/useModalController";

function WrapperContainer({ children }) {
   const { 
      modal, 
      handleModalOpen,
      handleModalClose,
   } = useModalController();

   return (
      <div id='wrap'>
         <ModalProvider value={{ modal, handleModalOpen, handleModalClose}}>
            {children}
         </ModalProvider>
      </div>
   )
};

export default WrapperContainer;