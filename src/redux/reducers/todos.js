import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, text: 'todo 1', completed: false },
  { id: 2, text: 'todo 2', completed: true },
  { id: 3, text: 'todo 3', completed: true },
  { id: 4, text: 'todo 4', completed: false },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

export default todosSlice.reducer;
