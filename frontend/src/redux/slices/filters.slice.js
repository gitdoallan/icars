import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';
import dayjs from 'dayjs';

const initialState = defineState({
  startDate: dayjs().toDate(),
  endDate: dayjs().add(1, 'day').toDate(),
  rating: 0,
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
  },
});

export const { setStartDate, setEndDate, setRating } = filtersSlice.actions;
