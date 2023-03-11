import React from 'react';
import styled from '@emotion/styled';

const DocumentReference = styled.div`
  height: 80px;

  color: black;
  width: 50%;
`;

const DocumentTitle = styled.div`
  margin-bottom: 4px;
  padding-left: 20px;
  font-size: 15px;
  color: #000000;
  text-align: left;
  font-weight: 400;
`;

const DocumentReferenceUl = styled.ul`
  margin-left: 20px;
`;
const DocumentAdressUl = styled.ul`
  line-height: normal;
`;

const DocumentReferenceList = styled.li`
  color: #000000;
  text-align: left;
`;

export const HeaderInfos = () => {
  return (
    <DocumentReference>
      <DocumentTitle>Facture</DocumentTitle>
      <DocumentReferenceUl>
        <DocumentReferenceList>Numéro de facture : FR006P4U-22015</DocumentReferenceList>
        <DocumentReferenceList>Émise le 7 déc. 2022</DocumentReferenceList>
        <DocumentReferenceList>Référence du virement : MTH396ICoX</DocumentReferenceList>
      </DocumentReferenceUl>
    </DocumentReference>
  );
};
