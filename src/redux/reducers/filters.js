import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  initialState: [
    { id: 1, value: 'All', isActive: true },
    { id: 2, value: 'Active', isActive: false },
    { id: 3, value: 'Completed', isActive: false },
  ],
  name: 'filters',
  reducers: {
    filterChanged: (state, { payload }) => {
      const activeFilterIndex = state.findIndex((filter) => filter.isActive);
      const newFilterIndex = state.findIndex(
        (filter) => filter.id === payload.filterId
      );

      if (newFilterIndex > -1) {
        // disable current filter
        state[activeFilterIndex].isActive = false;
        // make active new filter
        state[newFilterIndex].isActive = true;
      }
    },
  },
});

export default filtersSlice.reducer;
export const { filterChanged } = filtersSlice.actions;
