import React from 'react';
import styled from '@emotion/styled';

const PaymentContent = styled.div`
  font-size: 6px;
  font-weight: 400;
  width: 50%;
  text-align: left;
`;

const PaymentInformation = styled.ul`
  display: flex;
  flex-direction: column;
`;

const PaymentInformationLi = styled.li`
  margin-bottom: 5px;
`;

export const PaymentInfos = () => {
  return (
    <PaymentContent>
      Pour payer par virement, veuillez utiliser les coordonnées bancaires ci-dessous en veillant à bien reporter la référence de la transaction : <>MTH396ICoX</>
      <PaymentInformation>
        <PaymentInformationLi>Bénéficiaire : MALT</PaymentInformationLi>
        <PaymentInformationLi>IBAN : FR6021933000018J74MB4UH3F05</PaymentInformationLi>
        <PaymentInformationLi>BIC : MPAYFRP1XXX</PaymentInformationLi>
      </PaymentInformation>
    </PaymentContent>
  );
};
