import { configureStore } from '@reduxjs/toolkit';
import { saveToLocalStorage } from './localStorage';
import { reducers } from './rootReducer';

export const store = configureStore({
  reducer: reducers,
});

store.subscribe(() => {
  saveToLocalStorage({
    todos: store.getState().todos,
    filters: store.getState().filters,
  });
});
