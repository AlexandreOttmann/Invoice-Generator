import React from 'react';
import styled from '@emotion/styled';

const Footer = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: row;
`;

const FooterMention = styled.div`
  font-size: 5px;
  text-align: left;
`;

const FooterObligation = styled.div`
  font-size: 5px;
  text-align: left;
`;

export const FooterInvoice = () => {
  return (
    <Footer>
      <FooterMention>
        Alexandre Ottmann, Entreprise Individuelle - Ottmann Alexandre Micro entrepreneur enregistré sous le numéro 84351374800015. Exonéré de TVA en vertu des articles 151-0 et 293 B du CGI, dans la
        mesure où l'entreprise respecte les limites de chiffres d'affaires qui y sont fixées. Numéro de TVA Intracommunautaire : non renseigné
      </FooterMention>
      <FooterObligation>
        La facture est payable sous 60 jours. Tout règlement effectué après expiration du délai donnera lieu, à titre de pénalité de retard, à la facturation d'un intérêt de retard égal à trois fois
        le taux d'intérêt légal en vigueur en France, à compter de la date d'exigibilité de cette présente facture jusqu'à la date de paiement effectif, ainsi qu'à une indemnité forfaitaire pour frais
        de recouvrement d'un montant de 40 Euros. Les pénalités de retard sont exigibles sans qu'un rappel soit nécessaire.
      </FooterObligation>
    </Footer>
  );
};
