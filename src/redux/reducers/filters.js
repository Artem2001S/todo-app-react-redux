import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  initialState: [
    { value: 'All', isActive: true },
    { value: 'Active', isActive: false },
    { value: 'Completed', isActive: false },
  ],
  name: 'filterSeries',
  reducers: {
    filterChanged: (state, { payload }) => {},
  },
});

export default filtersSlice.reducer;
export const { filterChanged } = filtersSlice.actions;
