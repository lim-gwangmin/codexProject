import { WrapperContainer, Header, MainContainer, MainSection } from 'component/templetes';
import { Section01 ,Section02 } from 'component/oraganisms';

function Main() {
   return (
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
      </WrapperContainer>
   );
};

export default Main;