import GeneratePdf from '../components/GeneratePdf';
import { FormComponent } from '../components/Form/FormComponent';
import styled from '@emotion/styled';

function Home() {
 const RightContainer = styled.div`
  @media screen and (min-width: 1200px) {
   z-index: 0;
   display: inline-block;
   width: 50%;
   position: fixed;
   right: 0;
  }
 `;

 return (
  <>
   <div className="xl:flex xl:flex-row     bg-[##D7DFE0] ">
    <FormComponent />
    <RightContainer>
     <GeneratePdf />
    </RightContainer>
   </div>
  </>
 );
}

export default Home;
