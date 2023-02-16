import { ModalProvider } from "hooks/useModalContext";
import useModalController from "hooks/useModalController";

function WrapperContainer({ children }) {
   const { 
      modal, 
      handleModalOpen,
      handleModalClose,
      alertModal,
      handleAlertModalToggle,
      handleAlertModalClose,
   } = useModalController();

   return (
      <div id='wrap'>
         <ModalProvider 
            value={{ 
               modal, 
               handleModalOpen, 
               handleModalClose,
               alertModal,
               handleAlertModalToggle,
               handleAlertModalClose
            }}>
            {children}
         </ModalProvider>
      </div>
   )
};

export default WrapperContainer;