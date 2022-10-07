import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';

const initialState = defineState({ isLogged: false })('userInfo');

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state = payload;
      return state;
    },
    clearUserInfo: (state) => {
      state = { isLogged: false };
      return state;
    },
  },
});

export const { setUserInfo, clearUserInfo } = userInfoSlice.actions;
