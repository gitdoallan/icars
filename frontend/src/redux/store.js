import { configureStore } from '@reduxjs/toolkit';
import storeSynchronize from 'redux-localstore';
import {
  darkModeSlice, userInfoSlice,
} from './slices';

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
    userInfo: userInfoSlice.reducer,
  },
});

storeSynchronize(store);
