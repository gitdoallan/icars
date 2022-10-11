import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';
import dayjs from 'dayjs';

const initialState = defineState({
  startDate: dayjs().toDate(),
  endDate: dayjs().add(1, 'day').toDate(),
})('selectedDates');

export const selectedDatesSlice = createSlice({
  name: 'selectedDates',
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
  },
});

export const { setStartDate, setEndDate } = selectedDatesSlice.actions;
