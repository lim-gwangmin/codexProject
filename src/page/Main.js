import { Section01 ,Section02 } from 'component/oraganisms';
import { 
   WrapperContainer, 
   Header, 
   MainContainer, 
   MainSection,
   Modal,
   ModalAlert
} from 'component/templetes';

function Main() {
   return (
      <>
         <WrapperContainer>
            <Header/>
            <MainContainer>
               <MainSection id={'section01'}>
                  <Section01/>
               </MainSection>
               <MainSection id={'section02'}>
                  <Section02/>
               </MainSection>
            </MainContainer>

            <ModalAlert/>

            <Modal>
               asdasdasd
            </Modal>
         </WrapperContainer>

      </>
   );
};

export default Main;