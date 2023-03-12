import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../Context/Context';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  background-color: #eee;
  padding: 20px 10px;
  justify-content: space-between;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  padding: 0 10px;
`;

const BoxTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.75rem;
  color: #111827;
`;

const TextInput = styled.input`
  display: block;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  margin-top: 0.5rem;
  color: #111827;
  width: 100%;
  border-radius: 0.375rem;
  border-width: 0;
  box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  --tw-ring-inset: inset;
  --ring-color: #d1d5db;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 10px;
`;

const LabelInput = styled.label`
  display: block;
  margin-top: 15px;
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

export const FormComponent = () => {
  const [context, setContext] = useContext(Context);
  const [reference, setReference] = useState('');
  const [date, setDate] = useState('');
  const [paymentRef, setPaymentRef] = useState('');

  const [freelanceNameSociety, setFreelanceNameSociety] = useState('');
  const [freelanceName, setFreelanceName] = useState('');
  const [freelanceStreet, setFreelanceStreet] = useState('');
  const [freelanceCity, setFreelanceCity] = useState('');
  const [freelanceSiret, setFreelanceSiret] = useState('');

  const [societyName, setSocietyName] = useState('');
  const [societyStreet, setSocietyStreet] = useState('');
  const [societyCity, setSocietyCity] = useState('');
  const [societyContact, setSocietyContact] = useState('');
  const [societyImmatriculation, setSocietyImmatriculation] = useState('');
  const [societyTVAinterco, setSocietyTVAinterco] = useState('');

  const [benificiaryName, setBenificiaryName] = useState('');
  const [iban, setIban] = useState('');
  const [bic, setBic] = useState('');

  const [prestationName, setPrestationName] = useState('');
  const [prestationDescription, setPrestationDescription] = useState('');
  const [prestationQuantity, setPrestationQuantity] = useState(1);
  const [prestationPrice, setPrestationPrice] = useState(0);
  const [prestationTotal, setPrestationTotal] = useState(0);
  const [prestationTVA, setPrestationTVA] = useState(0);
  const [priceTVA, setPriceTVA] = useState(0);

  useEffect(() => {
    handleChange();
  }, [
    reference,
    date,
    paymentRef,
    freelanceNameSociety,
    freelanceName,
    freelanceStreet,
    freelanceCity,
    freelanceSiret,
    societyName,
    societyStreet,
    societyCity,
    societyContact,
    societyImmatriculation,
    societyTVAinterco,
    benificiaryName,
    iban,
    bic,
    prestationName,
    prestationDescription,
    prestationQuantity,
    prestationPrice,
    prestationTotal,
    prestationTVA,
    priceTVA,
  ]);

  const handleChange = () => {
    setPrestationTotal(prestationQuantity * prestationPrice);
    if (prestationTotal > 0) {
      setPriceTVA(prestationTotal * (prestationTVA / 100));
    } else {
      setPriceTVA(0);
    }
    setContext({
      reference,
      date,
      paymentRef,
      freelanceNameSociety,
      freelanceName,
      freelanceStreet,
      freelanceCity,
      freelanceSiret,
      societyName,
      societyStreet,
      societyCity,
      societyContact,
      societyImmatriculation,
      societyTVAinterco,
      benificiaryName,
      iban,
      bic,
      prestationName,
      prestationDescription,
      prestationQuantity,
      prestationPrice,
      prestationTotal,
      prestationTVA,
      priceTVA,
    });
  };

  return (
    <div>
      <form onChange={handleChange}>
        <Container>
          <Box>
            <BoxTitle>Information Facture</BoxTitle>

            <LabelInput htmlFor='reference'>Reference</LabelInput>
            <TextInput onChange={(e) => setReference(e.target.value)} name='reference' />

            <LabelInput htmlFor='date'>Date</LabelInput>
            <TextInput type='date' onChange={(e) => setDate(e.target.value)} name='date' />

            <LabelInput htmlFor='paymentRef'>Paiement Référence</LabelInput>
            <TextInput onChange={(e) => setPaymentRef(e.target.value)} name='paymentRef' />
          </Box>
          <Box>
            <BoxTitle>Information Bénéficiaire</BoxTitle>

            <LabelInput htmlFor='benificiaryName'>Nom du bénéficiaire</LabelInput>
            <TextInput onChange={(e) => setBenificiaryName(e.target.value)} name='benificiaryName' />

            <LabelInput htmlFor='iban'>IBAN</LabelInput>
            <TextInput onChange={(e) => setIban(e.target.value)} name='iban' />

            <LabelInput htmlFor='bic'>BIC</LabelInput>
            <TextInput onChange={(e) => setBic(e.target.value)} name='bic' />
          </Box>
        </Container>
        <Container>
          <Box>
            <BoxTitle>Information Prestataire</BoxTitle>

            <LabelInput htmlFor='freelanceNameSociety'>Nom de la socièté</LabelInput>
            <TextInput onChange={(e) => setFreelanceNameSociety(e.target.value)} name='freelanceNameSociety' />

            <LabelInput htmlFor='freelanceName'>Nom et prénom</LabelInput>
            <TextInput onChange={(e) => setFreelanceName(e.target.value)} name='freelanceName' />

            <LabelInput htmlFor='street'>Adresse</LabelInput>
            <TextInput onChange={(e) => setFreelanceStreet(e.target.value)} name='street' />

            <LabelInput htmlFor='city'>Code postal et ville</LabelInput>
            <TextInput onChange={(e) => setFreelanceCity(e.target.value)} name='city' />

            <LabelInput htmlFor='siret'>Siret</LabelInput>
            <TextInput onChange={(e) => setFreelanceSiret(e.target.value)} name='siret' />
          </Box>
          <Box>
            <BoxTitle>Information Client</BoxTitle>
            <LabelInput htmlFor='societyName'>Nom de la socièté</LabelInput>
            <TextInput onChange={(e) => setSocietyName(e.target.value)} name='societyName' />

            <LabelInput htmlFor='societyStreet'>Adresse de la socièté</LabelInput>
            <TextInput onChange={(e) => setSocietyStreet(e.target.value)} name='societyStreet' />

            <LabelInput htmlFor='societyCity'>Code postal et ville</LabelInput>
            <TextInput onChange={(e) => setSocietyCity(e.target.value)} name='societyCity' />

            <LabelInput htmlFor='societyContact'>Nom et prénom du contact</LabelInput>
            <TextInput onChange={(e) => setSocietyContact(e.target.value)} name='societyContact' />

            <LabelInput htmlFor='societyImmatriculation'>Numéro d'immatriculation</LabelInput>
            <TextInput onChange={(e) => setSocietyImmatriculation(e.target.value)} name='societyImmatriculation' />

            <LabelInput htmlFor='societyTVAinterco'>TVA intracom</LabelInput>
            <TextInput onChange={(e) => setSocietyTVAinterco(e.target.value)} name='societyTVAinterco' />
          </Box>
        </Container>
        <Container>
          <Box>
            <BoxTitle>Information Prestation</BoxTitle>
            <LabelInput htmlFor='prestationName'>Nom de la prestation</LabelInput>
            <TextInput onChange={(e) => setPrestationName(e.target.value)} name='prestationName' />

            <LabelInput htmlFor='prestationDescription'>Description de la prestation</LabelInput>
            <TextInput onChange={(e) => setPrestationDescription(e.target.value)} name='prestationDescription' />

            <LabelInput htmlFor='prestationQuantity'>Quantité</LabelInput>
            <TextInput type='number' onChange={(e) => setPrestationQuantity(+e.target.value)} name='prestationQuantity' />

            <LabelInput htmlFor='prestationPrice'>Prix unitaire</LabelInput>
            <TextInput type='number' onChange={(e) => setPrestationPrice(+e.target.value)} name='prestationPrice' />

            <LabelInput htmlFor='prestationTVA'>TVA</LabelInput>
            <TextInput type='number' onChange={(e) => setPrestationTVA(+e.target.value)} name='prestationTVA' />

            <LabelInput htmlFor='prestationTotal'>Prix Total (cacul automatiquement)</LabelInput>
            <TextInput readOnly value={prestationTotal.toFixed(2)} name='prestationTotal' />
          </Box>
        </Container>
      </form>
    </div>
  );
};
