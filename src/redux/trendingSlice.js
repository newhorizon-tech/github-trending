import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const corsURL = 'https://cors-for.herokuapp.com/';
const api = 'https://gh-trending-api.herokuapp.com/repositories?since=weekly';

const trendingAsync = createAsyncThunk(
  'rockets/fetchProjects',
  async () => {
    const response = await fetch(corsURL + api);
    const data = await response.json();
    console.log(data);
    return data;
  },
);

const trendingSlice = createSlice({
  name: 'TrendingProjects',
  initialState: { search: '', status: '', projects: [] },
  reducers: {
    search: (state, action) => {
      const newState = { ...state };
      newState.search = action.payload;
      return newState;
    },
    addProjects: (state, action) => {
      const newState = { ...state };
      newState.projects = action.payload;
      return newState;
    },
  },
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

export const { search, addProjects } = trendingSlice.actions;

export { trendingAsync };
