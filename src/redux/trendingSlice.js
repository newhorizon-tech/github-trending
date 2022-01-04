import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const trendingSlice = createSlice({
  name: 'trending-projects',
  initialState: { status: '', projects: [] },
  reducers: {  },
});

export default trendingSlice.reducer;

export { trendingAsync };
