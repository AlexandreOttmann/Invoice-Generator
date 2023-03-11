import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';
import logo from '../assets/react.svg';

const Container = styled.div`
  display: flex;

  border: 1px solid black;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  width: 446px;
  // height: 631px;
  padding: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
  margin: 10px 0 10px 0;
  font-size: 7px;
  font-weight: 400;
`;

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

const DocumentLogo = styled.div`
  height: auto;
  max-width: 60px;
  margin-top: 5px;
`;

const DocumentAdress = styled.div`
  height: auto;
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  flex-direction: column;

  color: black;
  text-align: left;
  padding: 10px 0px 10px 20px;
`;

const DocumentAdressTitle = styled.h2`
  color: #444;
  font-weight: 600;
  font-size: 10px;
  margin-bottom: 5px;
  width: 100%;
`;

const DocumentHeader = styled.div`
  color: grey;
  border-bottom: 1px solid grey;
  letter-spacing: 0.02px;
  margin-bottom: 5px;
  width: 100%;
`;

const TableHeader = styled.div`
  color: grey;
  border-bottom: 1px solid grey;
  letter-spacing: 0.02px;
  margin-bottom: 5px;
`;

const DocumentPrestationTitle = styled.h2`
  text-align: left;
  color: #444;
  font-weight: 600;
  letter-spacing: 0.02px;
  font-size: 10px;
  margin-bottom: 5px;
  width: 100%;
`;

const DocumentPrestationItem = styled.h3`
  margin-top: 0;
  height: 20px;
`;

const DocumentPrestation = styled.div`
  height: auto;
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  flex-direction: column;

  color: black;
  text-align: left;
  padding: 10px 0px 10px 20px;
`;

const PrestationTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 20px;
  font-size: 6px;
  color: #000;
`;

const PrestationTableThead = styled.thead`
  height: 20px;
`;

const PrestationTableTh = styled.th`
  height: 20px;
  font-weight: 700;
  font-size: 7px;
  text-align: left;
  &:first-child {
    width: 60%;
  }
`;

const PrestationTableTr = styled.tr`
  height: 20px;
`;

const PrestationTableTrTwo = styled.tr`
  border-bottom-width: 0.1em;
`;

const PrestationTableTd = styled.td`
  height: 20px;
  text-align: left;
  margin: 0 0 0 10px;
  &:nth-child(2) {
    text-align: center;
  }
  &:nth-child(3) {
    text-align: right;
  }
  &:nth-child(4) {
    text-align: right;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-content: stretch;
  margin: 10px 0 10px 0;
  font-size: 7px;
  font-weight: 400;
`;

const TablePrice = styled.table`
  width: 100px;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 6px;
  color: #000;
`;

const TablePriceTr = styled.tr`
  height: 15px;
  &:last-child {
    font-size: 10px;
    font-weight: 700;
  }
`;

const TablePriceTdOne = styled.td`
  height: 15px;
  font-weight: 700;
  font-size: 8px;
  text-align: left;
`;

const TablePriceTdTwo = styled.td`
  height: 15px;
  text-align: right;
`;

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

const ContentTemplate = () => {
  return (
    <Container>
      {/* REFERENCE & LOGO */}
      <Content>
        <DocumentReference>
          <DocumentTitle>Facture</DocumentTitle>
          <DocumentReferenceUl>
            <DocumentReferenceList>Numéro de facture : FR006P4U-22015</DocumentReferenceList>
            <DocumentReferenceList>Émise le 7 déc. 2022</DocumentReferenceList>
            <DocumentReferenceList>Référence du virement : MTH396ICoX</DocumentReferenceList>
          </DocumentReferenceUl>
        </DocumentReference>
        <DocumentLogo>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU' alt='logo' />
          {/* <DocumentLogoIMG /> */}
        </DocumentLogo>
      </Content>

      {/* ADRESS */}
      <Content>
        <DocumentAdress>
          <DocumentHeader>
            <DocumentAdressTitle>AU&nbsp;NOM&nbsp;ET&nbsp;POUR&nbsp;LE&nbsp;COMPTE&nbsp;DE</DocumentAdressTitle>
          </DocumentHeader>
          <DocumentAdressUl>
            {/* Adresse freelance */}
            <DocumentReferenceList>
              <strong>Oni Audio</strong>
            </DocumentReferenceList>
            <DocumentReferenceList>Nicolas De Raemy</DocumentReferenceList>
            <DocumentReferenceList>8 rue de la paix</DocumentReferenceList>
            <DocumentReferenceList>67480 Bordeaux France</DocumentReferenceList>
            <DocumentReferenceList>SIRET : 69696966969</DocumentReferenceList>
          </DocumentAdressUl>
        </DocumentAdress>
        <DocumentAdress>
          <DocumentHeader>
            <DocumentAdressTitle>ADRESSÉ&nbsp;À</DocumentAdressTitle>
          </DocumentHeader>
          <DocumentAdressUl>
            {/* Adresse client */}
            <DocumentReferenceList>
              <strong>SM LOCAL</strong>
            </DocumentReferenceList>
            <DocumentReferenceList>22-24 rue Jeuneurs</DocumentReferenceList>
            <DocumentReferenceList>75002 Paris, France</DocumentReferenceList>
            <DocumentReferenceList>Contact : Julien Zielinski </DocumentReferenceList>
            <DocumentReferenceList>Numéro d'immatriculation : 52834183700045</DocumentReferenceList>
            <DocumentReferenceList>TVA intracom : FR30528341837</DocumentReferenceList>
          </DocumentAdressUl>
        </DocumentAdress>
      </Content>

      {/* PRESTATION */}
      <Content>
        <DocumentPrestation>
          <DocumentHeader>
            <DocumentPrestationTitle>PRESTATION</DocumentPrestationTitle>
          </DocumentHeader>
          <DocumentPrestationItem>Enregistrement VO 1 motion</DocumentPrestationItem>

          <PrestationTable>
            <PrestationTableThead>
              <PrestationTableTr>
                <PrestationTableTh>Détail</PrestationTableTh>
                <PrestationTableTh>Quantité</PrestationTableTh>
                <PrestationTableTh style={{ textAlign: 'right' }}>Prix unitaire (HT)</PrestationTableTh>
                <PrestationTableTh style={{ textAlign: 'right' }}>TOTAL &nbsp; (HT)</PrestationTableTh>
              </PrestationTableTr>
            </PrestationTableThead>
            <tbody>
              <PrestationTableTrTwo>
                <PrestationTableTd>Record / Edit/Mix & Sound Design d'une vidéo de 1 minutes + versioning</PrestationTableTd>
                <PrestationTableTd style={{ textAlign: 'center' }}>1</PrestationTableTd>
                <PrestationTableTd>300</PrestationTableTd>
                <PrestationTableTd>300.00 €</PrestationTableTd>
              </PrestationTableTrTwo>

              <PrestationTableTrTwo>
                <PrestationTableTd>Record / Edit/Mix & Sound Design d'une vidéo de 1 minutes + versioning</PrestationTableTd>
                <PrestationTableTd style={{ textAlign: 'center' }}>1</PrestationTableTd>
                <PrestationTableTd>300</PrestationTableTd>
                <PrestationTableTd>300.00 €</PrestationTableTd>
              </PrestationTableTrTwo>
            </tbody>
          </PrestationTable>

          <TotalPrice>
            <TablePrice>
              <TablePriceTr>
                <TablePriceTdOne>Total (HT)</TablePriceTdOne>
                <TablePriceTdTwo>300,00 €</TablePriceTdTwo>
              </TablePriceTr>
              <TablePriceTr>
                <TablePriceTdOne>TVA (0%)</TablePriceTdOne>
                <TablePriceTdTwo>0,00 €</TablePriceTdTwo>
              </TablePriceTr>
              <TablePriceTr>
                <TablePriceTdOne>Total (TTC&nbsp;)</TablePriceTdOne>
                <TablePriceTdTwo>300,00 €</TablePriceTdTwo>
              </TablePriceTr>
            </TablePrice>
          </TotalPrice>
        </DocumentPrestation>
      </Content>
      {/* PAYMENT */}
      <Content>
        <PaymentContent>
          Pour payer par virement, veuillez utiliser les coordonnées bancaires ci-dessous en veillant à bien reporter la référence de la transaction : <>MTH396ICoX</>
          <PaymentInformation>
            <PaymentInformationLi>Bénéficiaire : MALT</PaymentInformationLi>
            <PaymentInformationLi>IBAN : FR6021933000018J74MB4UH3F05</PaymentInformationLi>
            <PaymentInformationLi>BIC : MPAYFRP1XXX</PaymentInformationLi>
          </PaymentInformation>
        </PaymentContent>
      </Content>
      {/* FOOTER */}
      <Content>
        <Footer>
          <FooterMention>
            Alexandre Ottmann, Entreprise Individuelle - Ottmann Alexandre Micro entrepreneur enregistré sous le numéro 84351374800015. Exonéré de TVA en vertu des articles 151-0 et 293 B du CGI, dans
            la mesure où l'entreprise respecte les limites de chiffres d'affaires qui y sont fixées. Numéro de TVA Intracommunautaire : non renseigné
          </FooterMention>
          <FooterObligation>
            La facture est payable sous 60 jours. Tout règlement effectué après expiration du délai donnera lieu, à titre de pénalité de retard, à la facturation d'un intérêt de retard égal à trois
            fois le taux d'intérêt légal en vigueur en France, à compter de la date d'exigibilité de cette présente facture jusqu'à la date de paiement effectif, ainsi qu'à une indemnité forfaitaire
            pour frais de recouvrement d'un montant de 40 Euros. Les pénalités de retard sont exigibles sans qu'un rappel soit nécessaire.
          </FooterObligation>
        </Footer>
      </Content>
    </Container>
  );
};

export default ContentTemplate;
