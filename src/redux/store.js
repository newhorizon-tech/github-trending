import { configureStore } from '@reduxjs/toolkit';
import trendingReducer from './trendingSlice';

const store = configureStore({
  reducer: {
    trending: trendingReducer,
  },
});

export default store;
