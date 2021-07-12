import { createSelector } from 'reselect';
import { filterValues } from 'redux/reducers/filtersReducer';

const getTodos = (state) => state.todos;
const getFilters = (state) => state.filters;

const getCurrentFilter = createSelector([getFilters], (filters) =>
  filters.find((filter) => filter.isActive)
);

export const getTodosCount = createSelector(
  [getTodos],
  (todos) => todos.length
);

export const getNotCompletedTodosCount = createSelector([getTodos], (todos) => {
  return todos.filter((todo) => !todo.isCompleted).length;
});

export const getCompletedTodosCount = createSelector([getTodos], (todos) => {
  return todos.filter((todo) => todo.isCompleted).length;
});

export const getVisibleTodoList = createSelector(
  [getTodos, getCurrentFilter],
  (todos, currentFilter) => {
    const filterValue = currentFilter.value;
    switch (filterValue) {
      case filterValues.All:
        return todos;
      case filterValues.Active:
        return todos.filter((todo) => !todo.isCompleted);
      case filterValues.Completed:
        return todos.filter((todo) => todo.isCompleted);
      default:
        break;
    }
  }
);
