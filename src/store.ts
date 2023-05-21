import { configureStore } from '@reduxjs/toolkit';
import academiesSlice from './slices/academiesSlice';

export const store = configureStore({
  reducer: {
    academies: academiesSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;