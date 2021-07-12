import { createSelector } from 'reselect';

const getTodos = (state) => state.todos;

export const makeGetNotCompletedTodosCount = () =>
  createSelector([getTodos], (todos) => {
    return todos.filter((todo) => !todo.isCompleted).length;
  });
