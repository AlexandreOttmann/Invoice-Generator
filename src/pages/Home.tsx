import GeneratePdf from '../components/GeneratePdf';
import Example from '../components/FormTest';
import { FormComponent } from '../components/Form/FormComponent';

function Home() {
  return (
    <>
      <FormComponent />
      <GeneratePdf />
    </>
  );
}

export default Home;
