import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';
import dayjs from 'dayjs';

const initialState = defineState({
  startDate: dayjs().toDate(),
  endDate: dayjs().add(1, 'day').toDate(),
  rating: 0,
  bikeModel: 0,
  bikeColor: 0,
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
    setBikeModel: (state, { payload }) => {
      state.bikeModel = payload;
      return state;
    },
    setBikeColor: (state, { payload }) => {
      state.bikeColor = payload;
      return state;
    },
    setStoreLocation: (state, { payload }) => {
      state.storeLocation = payload;
      return state;
    },
    resetFilters: (state) => {
      state.rating = 0;
      state.bikeModel = 0;
      state.bikeColor = 0;
      state.storeLocation = 0;
      return state;
    },
  },
});

export const {
  setStartDate, setEndDate, setRating, setBikeModel, setBikeColor, setStoreLocation, resetFilters,
} = filtersSlice.actions;
