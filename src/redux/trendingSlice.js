import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const corsURL = 'https://cors-for.herokuapp.com/';
const apiOne = 'https://gh-trending-api.herokuapp.com/repositories';
const apiTwo = 'https://trendings.herokuapp.com/repo';

const trendingAsync = createAsyncThunk(
  'rockets/fetchProjects',
  async () => {
    console.log("Start");
    const response = await fetch(corsURL+apiOne);
    const data = await response.json();
    return data;
  },
);

const trendingSlice = createSlice({
  name: 'TrendingProjects',
  initialState: { status: '', projects: [] },
  reducers: {  },
  extraReducers: (builder) => {
    builder
      .addCase(trendingAsync.pending, (state) => {
        const newState = { ...state };
        newState.status = 'loading';
        return newState;
      })
      .addCase(trendingAsync.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.status = 'loaded';
        newState.projects = action.payload;
        return newState;
      });
  },
});

export default trendingSlice.reducer;

export { trendingAsync };
