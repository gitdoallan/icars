import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';
import dayjs from 'dayjs';

const initialState = defineState({
  startDate: dayjs().toDate(),
  endDate: dayjs().add(1, 'day').toDate(),
  rating: 0,
  carModel: 0,
  carColor: 0,
  storeLocation: 0,
})('filters');

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStartDate: (state, { payload }) => {
      state.startDate = payload;
      return state;
    },
    setEndDate: (state, { payload }) => {
      state.endDate = payload;
      return state;
    },
    setRating: (state, { payload }) => {
      state.rating = payload;
      return state;
    },
    setCarModel: (state, { payload }) => {
      state.carModel = payload;
      return state;
    },
    setCarColor: (state, { payload }) => {
      state.carColor = payload;
      return state;
    },
    setStoreLocation: (state, { payload }) => {
      state.storeLocation = payload;
      return state;
    },
    resetFilters: (state) => {
      state.rating = 0;
      state.carModel = 0;
      state.carColor = 0;
      state.storeLocation = 0;
      return state;
    },
  },
});

export const {
  setStartDate, setEndDate, setRating, setCarModel, setCarColor, setStoreLocation, resetFilters,
} = filtersSlice.actions;
