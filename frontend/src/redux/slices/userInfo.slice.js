import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';

const initialState = defineState({
  id: 0, email: '', name: '', role: '', token: '',
})('userInfo');

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;
