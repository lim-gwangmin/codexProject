import { configureStore } from '@reduxjs/toolkit';
import sliceReducer from './sliceReducer';

export const store = configureStore({
  reducer: {
   sliceReducer,
  },
});