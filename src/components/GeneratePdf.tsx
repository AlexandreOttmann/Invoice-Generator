import { jsPDF } from 'jspdf';
import React, { useRef } from 'react';
import styled from '@emotion/styled';

import ContentTemplate from './InvoiceTemplate';

const Container = styled('div')`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const Button = styled('button')`
  margin: 50px;
  padding: 10px;
  background-color: red;
  color: white;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  cursor: pointer;
  width: 200px;
  :hover {
    background-color: #000;
  }
`;

const GeneratePdf: React.FC = () => {
  const certificateTemplateRef = useRef<any>(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: 'a4',
      unit: 'px',
    });

    // Adding the fonts
    doc.setFont('Helvetica', 'Roboto', 'Arial');

    doc.html(certificateTemplateRef.current, {
      async callback(doc) {
        // save the document as a PDF with name of Memes
        doc.save('Invoice');
      },
    });
  };

  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Button onClick={handleGeneratePdf}>Generate Pdf</Button>
      <div ref={certificateTemplateRef}>
        <ContentTemplate />
      </div>
    </Container>
  );
};

export default GeneratePdf;
