import React, { useState, useContext, useEffect, useReducer } from 'react';
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

const ButtonAdd = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #3b82f6;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.375rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    background-color: #2563eb;
  }
`;

const ButtonRemove = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #f56565;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.375rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    background-color: #e53e3e;
  }
`;

interface IState {
  reference: string;
  date: string;
  paymentRef: string;
  freelanceNameSociety: string;
  freelanceName: string;
  freelanceStreet: string;
  freelanceCity: string;
  freelanceSiret: string;
  societyName: string;
  societyStreet: string;
  societyCity: string;
  societyContact: string;
  societyImmatriculation: string;
  societyTVAinterco: string;
  benificiaryName: string;
  iban: string;
  bic: string;
  prestationName: string;
  prestationDescription: string;
  prestationQuantity: number;
  prestationPrice: number;
  prestationTotal: number;
  prestationTVA: number;
  priceTVA: number;
  description: string;
  quantity: number;
  price: number;
  TVA: number;
  prestation: {
    description: string;
    quantity: number;
    price: number;
    TVA: number;
    totalHT: number;
    total: number;
  }[];
  totalHT: number;
  totalTTC: number;
}

export const FormComponent = () => {
  const [inputList, setInputList] = useState([
    {
      description: '',
      quantity: 0,
      price: 0,
      TVA: 0,
    },
  ]);
  const [isDisabled, setIsDisabled] = useState(false);

  const iniatialState: IState = {
    reference: '',
    date: '',
    paymentRef: '',
    freelanceNameSociety: '',
    freelanceName: '',
    freelanceStreet: '',
    freelanceCity: '',
    freelanceSiret: '',
    societyName: '',
    societyStreet: '',
    societyCity: '',
    societyContact: '',
    societyImmatriculation: '',
    societyTVAinterco: '',
    benificiaryName: '',
    iban: '',
    bic: '',
    prestationName: '',
    prestationDescription: '',
    prestationQuantity: 1,
    prestationPrice: 0,
    prestationTotal: 0,
    prestationTVA: 0,
    priceTVA: 0,
    description: '',
    quantity: 0,
    price: 0,
    TVA: 0,
    totalHT: 0,
    totalTTC: 0,
    prestation: [
      {
        description: '',
        quantity: 0,
        price: 0,
        TVA: 0,
        total: 0,
        totalHT: 0,
      },
    ],
  };

  const reducer = (state: any, action: { type: any; payload: any }) => {
    switch (action.type) {
      case 'reference':
        return { ...state, reference: action.payload };
      case 'date':
        return { ...state, date: action.payload };
      case 'paymentRef':
        return { ...state, paymentRef: action.payload };
      case 'freelanceNameSociety':
        return { ...state, freelanceNameSociety: action.payload };
      case 'freelanceName':
        return { ...state, freelanceName: action.payload };
      case 'freelanceStreet':
        return { ...state, freelanceStreet: action.payload };
      case 'freelanceCity':
        return { ...state, freelanceCity: action.payload };
      case 'freelanceSiret':
        return { ...state, freelanceSiret: action.payload };
      case 'societyName':
        return { ...state, societyName: action.payload };
      case 'societyStreet':
        return { ...state, societyStreet: action.payload };
      case 'societyCity':
        return { ...state, societyCity: action.payload };
      case 'societyContact':
        return { ...state, societyContact: action.payload };
      case 'societyImmatriculation':
        return { ...state, societyImmatriculation: action.payload };
      case 'societyTVAinterco':
        return { ...state, societyTVAinterco: action.payload };
      case 'benificiaryName':
        return { ...state, benificiaryName: action.payload };
      case 'iban':
        return { ...state, iban: action.payload };
      case 'bic':
        return { ...state, bic: action.payload };
      case 'prestationName':
        return { ...state, prestationName: action.payload };
      case 'prestationDescription':
        return { ...state, prestationDescription: action.payload };
      case 'prestationQuantity':
        return { ...state, prestationQuantity: action.payload };
      case 'prestationPrice':
        return { ...state, prestationPrice: action.payload };
      case 'prestationTVA':
        return { ...state, prestationTVA: action.payload };
      case 'priceTVA':
        return { ...state, priceTVA: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, iniatialState);

  let {
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
  } = state;

  const [context, setContext] = useContext(Context);

  useEffect(() => {
    handleChange();
    if (inputList.length > 0) {
      inputList[inputList.length - 1].description === '' ? setIsDisabled(true) : setIsDisabled(false);
    }
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
    inputList,
  ]);

  prestationTotal = prestationQuantity * prestationPrice;
  priceTVA = prestationTotal * (prestationTVA / 100);

  const handleChange = () => {
    if (prestationTotal > 0) {
      dispatch({ type: 'prestationTotal', payload: +prestationQuantity * +prestationPrice });
    } else {
      dispatch({ type: 'prestationTotal', payload: 0 });
    }
    if (prestationTotal > 0) {
      dispatch({ type: 'priceTVA', payload: +prestationTotal * (+prestationTVA / 100) });
    } else {
      dispatch({ type: 'priceTVA', payload: 0 });
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
      prestations: inputList,
    });
  };

  const handleListAdd = (e: any) => {
    e.preventDefault();
    setInputList([
      ...inputList,
      {
        description: '',
        quantity: 0,
        price: 0,
        TVA: 0,
      },
    ]);
  };

  const handleInputChange = (event: any, index: number) => {
    const { value } = event.target;
    console.log(typeof index);
    const list = [...inputList];
    list[index][event.currentTarget.name] = value;
    list[index].totalHT = list[index].quantity * list[index].price;
    list[index].totalTVA = list[index].totalHT * (list[index].TVA / 100);
    list[index].totalTTC = list[index].totalHT + list[index].totalTVA;
    // on ajoute la prestation au state
    dispatch({ type: 'prestation', payload: list });

    setInputList(list);
  };

  const handleRemoveItem = (index: number) => {
    const newList = [...inputList];
    newList.splice(index, 1);
    setInputList(newList);
  };

  console.log(inputList);

  return (
    <div>
      <form onChange={handleChange}>
        <Container>
          <Box>
            <BoxTitle>Information Facture</BoxTitle>
            <LabelInput htmlFor='reference'>Reference</LabelInput>
            <TextInput onChange={(e) => dispatch({ type: 'reference', payload: e.target.value })} name='reference' />

            <LabelInput htmlFor='date'>Date</LabelInput>
            <TextInput type='date' onChange={(e) => dispatch({ type: 'date', payload: e.target.value })} name='date' />

            <LabelInput htmlFor='paymentRef'>Paiement Référence</LabelInput>
            <TextInput onChange={(e) => dispatch({ type: 'paymentRef', payload: e.target.value })} name='paymentRef' />
          </Box>
          <Box>
            <BoxTitle>Information Bénéficiaire</BoxTitle>
            <LabelInput htmlFor='benificiaryName'>Nom du bénéficiaire</LabelInput>
            <TextInput onChange={(e) => dispatch({ type: 'benificiaryName', payload: e.target.value })} name='benificiaryName' />

            <LabelInput htmlFor='iban'>IBAN</LabelInput>
            <TextInput onChange={(e) => dispatch({ type: 'iban', payload: e.target.value })} name='iban' />

            <LabelInput htmlFor='bic'>BIC</LabelInput>
            <TextInput onChange={(e) => dispatch({ type: 'bic', payload: e.target.value })} name='bic' />
          </Box>
        </Container>
        <Container>
          <Box>
            <BoxTitle>Information Prestataire</BoxTitle>

            <LabelInput htmlFor='freelanceNameSociety'>Nom de la socièté</LabelInput>
            <TextInput onChange={(e) => dispatch({ type: 'freelanceNameSociety', payload: e.target.value })} name='freelanceNameSociety' />

            <LabelInput htmlFor='freelanceName'>Nom et prénom</LabelInput>
            <TextInput onChange={(e) => dispatch({ type: 'freelanceName', payload: e.target.value })} name='freelanceName' />

            <LabelInput htmlFor='street'>Adresse</LabelInput>
            <TextInput onChange={(e) => dispatch({ type: 'freelanceStreet', payload: e.target.value })} name='street' />

            <LabelInput htmlFor='city'>Code postal et ville</LabelInput>
            <TextInput onChange={(e) => dispatch({ type: 'freelanceCity', payload: e.target.value })} name='city' />

            <LabelInput htmlFor='siret'>Siret</LabelInput>
            <TextInput onChange={(e) => dispatch({ type: 'freelanceSiret', payload: e.target.value })} name='siret' />
          </Box>
          <Box>
            <BoxTitle>Information Client</BoxTitle>
            <LabelInput htmlFor='societyName'>Nom de la socièté</LabelInput>
            <TextInput onChange={(e) => dispatch({ type: 'societyName', payload: e.target.value })} name='societyName' />

            <LabelInput htmlFor='societyStreet'>Adresse de la socièté</LabelInput>
            <TextInput onChange={(e) => dispatch({ type: 'societyStreet', payload: e.target.value })} name='societyStreet' />

            <LabelInput htmlFor='societyCity'>Code postal et ville</LabelInput>
            <TextInput onChange={(e) => dispatch({ type: 'societyCity', payload: e.target.value })} name='societyCity' />

            <LabelInput htmlFor='societyContact'>Nom et prénom du contact</LabelInput>
            <TextInput onChange={(e) => dispatch({ type: 'societyContact', payload: e.target.value })} name='societyContact' />

            <LabelInput htmlFor='societyImmatriculation'>Numéro d'immatriculation</LabelInput>
            <TextInput onChange={(e) => dispatch({ type: 'societyImmatriculation', payload: e.target.value })} name='societyImmatriculation' />

            <LabelInput htmlFor='societyTVAinterco'>TVA intracom</LabelInput>
            <TextInput onChange={(e) => dispatch({ type: 'societyTVAinterco', payload: e.target.value })} name='societyTVAinterco' />
          </Box>
        </Container>
        <Container>
          <Box>
            <BoxTitle>Information Prestation</BoxTitle>
            <LabelInput htmlFor='prestationName'>Nom de la prestation</LabelInput>
            <TextInput onChange={(e) => dispatch({ type: 'prestationName', payload: e.target.value })} name='prestationName' />

            <LabelInput htmlFor='prestationDescription'>Description de la prestation</LabelInput>
            <TextInput onChange={(e) => dispatch({ type: 'prestationDescription', payload: e.target.value })} name='prestationDescription' />

            <LabelInput htmlFor='prestationQuantity'>Quantité</LabelInput>
            <TextInput type='number' onChange={(e) => dispatch({ type: 'prestationQuantity', payload: +e.target.value })} name='prestationQuantity' />

            <LabelInput htmlFor='prestationPrice'>Prix unitaire</LabelInput>
            <TextInput type='number' onChange={(e) => dispatch({ type: 'prestationPrice', payload: +e.target.value })} name='prestationPrice' />

            <LabelInput htmlFor='prestationTVA'>TVA</LabelInput>
            <TextInput type='number' onChange={(e) => dispatch({ type: 'prestationTVA', payload: +e.target.value })} name='prestationTVA' />
          </Box>
        </Container>
        <Container>
          <Box>
            {/*Add inputs for another prestation details*/}
            {inputList.map((description, index) => (
              <div key={index}>
                <BoxTitle>Prestation n°{index + 1}</BoxTitle>
                <LabelInput htmlFor='description'>Description de la prestation</LabelInput>
                <TextInput id='outlined-basic' name='description' onChange={(event) => handleInputChange(event, index)} />
                <LabelInput htmlFor='quantity'>Quantité</LabelInput>
                <TextInput id='outlined-basic' type='number' name='quantity' onChange={(event) => handleInputChange(event, index)} />
                <LabelInput htmlFor='price'>Prix unitaire</LabelInput>
                <TextInput id='outlined-basic' type='number' name='price' onChange={(event) => handleInputChange(event, index)} />
                <LabelInput htmlFor='TVA'>TVA</LabelInput>
                <TextInput id='outlined-basic' type='number' name='TVA' onChange={(event) => handleInputChange(event, index)} />
                {index === 0 ? (
                  <ButtonAdd onClick={handleListAdd}>Ajouter une nouvelle prestation</ButtonAdd>
                ) : (
                  <>
                    <ButtonRemove onClick={() => handleRemoveItem(index)}>Supprimer la prestation</ButtonRemove>
                    <ButtonAdd onClick={handleListAdd}>Ajouter une nouvelle prestation</ButtonAdd>
                  </>
                )}

                {/* <button onClick={() => handleRemoveItem(index)}>
                  <span role='img' aria-label='x emoji'>
                    ❌
                  </span>
                </button> */}
              </div>
            ))}
            {/* <Button onClick={handleListAdd}>Ajouter une nouvelle prestation</Button> */}
          </Box>
        </Container>
        <Container>
          <Box>
            <LabelInput htmlFor='prestationTotal'>Prix Total de la prestation HT</LabelInput>
            <TextInput readOnly disabled value={prestationTotal.toFixed(2)} name='prestationTotal' />
            <LabelInput htmlFor='prestationTotal'>Prix Total de la prestation TTC</LabelInput>
            <TextInput readOnly disabled value={+priceTVA.toFixed(2) + +prestationTotal.toFixed(2)} name='prestationTotalTTC' />
          </Box>
        </Container>
      </form>
    </div>
  );
};
