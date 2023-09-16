import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const pendingReducer = state => {
  state.isLoading = true;
};
const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchAdvertsFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  action.payload.forEach(payloadItem => {
    const found = state.items.some(
      stateItem => stateItem.id === payloadItem.id
    );

    if (!found) {
      state.items.push(payloadItem);
    }
  });
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
      items: [],
      favorites: [],
    isLoading: false,
    error: null,
     // Add filtering-related state
    filters: {
      selectedBrand: null,
      selectedPrice: null,
      fromMileage: '',
      toMileage: '',
    },
  },reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
    },
 
   // Add reducers for updating filter values
    setSelectedBrand: (state, action) => {
      state.filters.selectedBrand = action.payload;
    },
    setSelectedPrice: (state, action) => {
      state.filters.selectedPrice = action.payload;
    },
    setFromMileage: (state, action) => {
      state.filters.fromMileage = action.payload;
    },
    setToMileage: (state, action) => {
      state.filters.toMileage = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.pending, pendingReducer)
      .addCase(fetchAdverts.fulfilled, fetchAdvertsFulfilledReducer)
      .addCase(fetchAdverts.rejected, rejectedReducer),
});

export const carsReducer = carsSlice.reducer;
export const { addFavorite, removeFavorite, setSelectedBrand,
  setSelectedPrice,
  setFromMileage,
  setToMileage, } = carsSlice.actions;