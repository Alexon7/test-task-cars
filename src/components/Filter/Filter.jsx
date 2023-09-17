import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import {
  FilterForm,
  FormLabel,
  MileageInput,
  SubmitButton,
} from './Filter.styled';
import makes from '../../data/makes.json';
import {
    setSelectedBrand,
    setSelectedPrice,
    setFromMileage,
    setToMileage
} from '../../redux/slice';
import { fetchAdverts } from '../../redux/operations';

const brands = makes.map(make => ({ value: make, label: make }));
const pricesPerHour = [
  { value: 10, label: 10 },
  { value: 20, label: 20 },
  { value: 30, label: 30 },
  { value: 40, label: 40 },
  { value: 50, label: 50 },
  { value: 60, label: 60 },
  { value: 70, label: 70 },
  { value: 80, label: 80 },
  { value: 90, label: 90 },
  { value: 100, label: 100 },
];

const Filter = () => {

  const selectedBrand = useSelector(state => state.cars.filters.selectedBrand);
  const selectedPrice = useSelector(state => state.cars.filters.selectedPrice);
  const fromMileage = useSelector(state => state.cars.filters.fromMileage);
  const toMileage = useSelector(state => state.cars.filters.toMileage);
  const dispatch = useDispatch();

  const handleBrandChange = selectedOption => {
    dispatch(setSelectedBrand(selectedOption));
  };

  const handlePriceChange = selectedOption => {
    dispatch(setSelectedPrice(selectedOption));
    };
    
    const handleFromMileageChange = event => {
    dispatch(setFromMileage(event.target.value));
  };

  const handleToMileageChange = event => {
    dispatch(setToMileage(event.target.value));
  };

  const handleSubmit = event => {
      event.preventDefault();
      
       dispatch(fetchAdverts({
      selectedBrand, 
      selectedPrice, 
      fromMileage,
      toMileage,
    }));
    // use selectedBrand, selectedPrice, fromMileage, and toMileage for filtering.
    //  filtering logic here.
    };
    
  return (
    <FilterForm onSubmit={handleSubmit}>
      <div className="filter-brand">
        <FormLabel>Car brand</FormLabel>
        <Select
          classNamePrefix="filter-select"
                  options={brands}
                   value={selectedBrand}
          onChange={handleBrandChange}
          placeholder="Enter the text"
        />
      </div>
      <div className="filter-price">
        <FormLabel>Price / 1 hour</FormLabel>
        <Select
          classNamePrefix="filter-select"
                  options={pricesPerHour}
                   value={selectedPrice}
          onChange={handlePriceChange}
          placeholder="Enter the text"
        />
      </div>
      <div>
        <FormLabel>Car mileage / km</FormLabel>
        <MileageInput type="text" placeholder="From"  value={fromMileage}
          onChange={handleFromMileageChange}/>
        <MileageInput type="text" placeholder="To"  value={toMileage}
          onChange={handleToMileageChange}  />
      </div>
      <SubmitButton type="submit">Search</SubmitButton>
    </FilterForm>
  );
};

export default Filter;