import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', text: 'todo 1', isCompleted: true },
  { id: '2', text: 'todo 2', isCompleted: true },
  { id: '3', text: 'todo 3', isCompleted: true },
  { id: '4', text: 'todo 4', isCompleted: false },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: (text) => ({
        payload: {
          id: nanoid(),
          text,
          isCompleted: false,
        },
      }),
    },

    todoDeleted: (state, { payload }) => {
      return state.filter((todo) => todo.id !== payload);
    },

    todoTextChanged: (state, { payload }) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      state[index].text = payload.text;
    },

    todoToggled: (state, { payload }) => {
      state.forEach(
        (todo) => todo.id === payload && (todo.isCompleted = !todo.isCompleted)
      );
    },

    allTodosToggled: (state) => {
      const isAllCompleted = state.every((todo) => todo.isCompleted);
      const isAllNotCompleted = state.every((todo) => todo.isCompleted);
      state.forEach((todo) => {
        todo.isCompleted =
          isAllCompleted || isAllNotCompleted ? !todo.isCompleted : true;
      });
    },

    completedTodoDeleted: (state) => {
      return state.filter((todo) => !todo.isCompleted);
    },
  },
});

export const {
  todoDeleted,
  todoTextChanged,
  todoToggled,
  todoAdded,
  allTodosToggled,
  completedTodoDeleted,
} = todosSlice.actions;
export default todosSlice.reducer;
