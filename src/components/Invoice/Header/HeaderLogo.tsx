import React from 'react';
import styled from '@emotion/styled';

const DocumentLogo = styled.div`
  height: auto;
  max-width: 60px;
  margin-top: 5px;
`;

export const HeaderLogo = () => {
  return (
    <DocumentLogo>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU' alt='logo' />
      {/* <DocumentLogoIMG /> */}
    </DocumentLogo>
  );
};
