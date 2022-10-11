import { configureStore } from '@reduxjs/toolkit';
import storeSynchronize from 'redux-localstore';
import {
  darkModeSlice, userInfoSlice, filtersSlice,
} from './slices';

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
    userInfo: userInfoSlice.reducer,
    filters: filtersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

storeSynchronize(store, {
  blacklist: ['filters'],
});
