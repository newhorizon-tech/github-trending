import { configureStore } from '@reduxjs/toolkit';
import trendingReducer from './trendingSlice';

export const store = configureStore({
  reducer: {
    trending: trendingReducer,
  },
});
