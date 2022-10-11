import { configureStore } from '@reduxjs/toolkit';
import storeSynchronize from 'redux-localstore';
import {
  darkModeSlice, userInfoSlice, selectedDatesSlice,
} from './slices';

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
    userInfo: userInfoSlice.reducer,
    selectedDates: selectedDatesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

storeSynchronize(store, {
  blacklist: ['selectedDates'],
});
