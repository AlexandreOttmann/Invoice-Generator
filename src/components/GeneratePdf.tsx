import { jsPDF } from 'jspdf';
import React, { useRef } from 'react';
import ContentTemplate from './InvoiceTemplate';
import '../assets/fonts/Anton-Regular-normal';

const GeneratePdf: React.FC = () => {
 const certificateTemplateRef = useRef<any>(null);

 const handleGeneratePdf = () => {
  const doc = new jsPDF({
   format: 'a4',
   unit: 'px',
  });

  // Adding the fonts
  doc.setFont('Anton-Regular', 'normal');

  doc.html(certificateTemplateRef.current, {
   async callback(doc) {
    // save the document as a PDF with name of Memes
    doc.save('Memes');
   },
  });
 };

 return (
  <div
   style={{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
   }}
  >
   <button
    // style={{
    //  margin: '50px',
    //  padding: '10px',
    //  backgroundColor: 'black',
    //  color: 'white',
    //  fontFamily: 'Anton',
    //  fontSize: '1.2rem',
    //  textTransform: 'uppercase',
    //  letterSpacing: '0.1rem',
    //  cursor: 'pointer',
    //  width: '200px',
    // }}
    className="bg-red-500"
    onClick={handleGeneratePdf}
   >
    Generate Pdf
   </button>
   <div ref={certificateTemplateRef}>
    <ContentTemplate />
   </div>
  </div>
 );
};

export default GeneratePdf;
