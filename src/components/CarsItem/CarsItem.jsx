import {
  CarCard,
  CarImageWrapper,
  CarImage,
  ContentWrapper,
  MainContent,
  SecondaryContent,
  MainText,
  MainTextModel,
  SecondaryText,
} from './CarsItem.syled';

import Button from '../Button/Button';
import Modal from '../Modal/Modal'
import { useState } from "react";


const CarsItem = ({
  model,
  make,
  year,
  rentalPrice,
  isFavorite,
  address,
  rentalCompany,
  functionalities,
  id,
  type,
  img,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  mileage,
}) => {

     const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
    
    const addressParts = address.split(', ');
    const city = addressParts[1];
    const country = addressParts[2];
    const firstFunctionality = functionalities[0];

  return (
    <>
      <CarCard key={id}>
        <CarImageWrapper>
          <CarImage src={img} alt="car" />
        </CarImageWrapper>
        <ContentWrapper>
          <MainContent>
            <MainText>
              {make}
              <MainTextModel> {model}, </MainTextModel>
              {year}
            </MainText>
            <MainText>{rentalPrice}</MainText>
          </MainContent>
          <SecondaryContent>
            <SecondaryText>{city}</SecondaryText>
            <SecondaryText>{country}</SecondaryText>
            <SecondaryText>{rentalCompany}</SecondaryText>
            <SecondaryText>{type}</SecondaryText>
            <SecondaryText>{make}</SecondaryText>
            <SecondaryText>{id}</SecondaryText>
            <SecondaryText>{firstFunctionality}</SecondaryText>
          </SecondaryContent>
          {/* <p>{isFavorite}</p>
          <p>{fuelConsumption}</p>
          <p>{engineSize}</p>
          <p>{description}</p>
          <p>{functionalities}</p>
          <p>{rentalConditions}</p>
          <p>{mileage}</p> */}
        </ContentWrapper>
              <Button type="button" onClick={toggleModal}>Learn more</Button>
              {showModal && (
          <Modal
                      onClose={toggleModal}
                      showModal={showModal}
            key={id}
            model={model}
            make={make}
            year={year}
            rentalPrice={rentalPrice}
            address={address}
            rentalCompany={rentalCompany}
            functionalities={functionalities}
            id={id}
            type={type}
            img={img}
            fuelConsumption={fuelConsumption}
            engineSize={engineSize}
            description={description}
            accessories={accessories}
            rentalConditions={rentalConditions}
            mileage={mileage}
          />
        )}
              
      </CarCard>
    </>
  );
};

export default CarsItem;