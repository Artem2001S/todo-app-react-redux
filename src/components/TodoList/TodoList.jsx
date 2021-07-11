import React from 'react';
import classes from './TodoList.module.scss';

export default function TodoList({ todos, children }) {
  return (
    <div className={classes.TodoListContainer}>
      <h1 className={classes.Title}>todos</h1>
      <div className={classes.TodoList}>{children}</div>
    </div>
  );
}
