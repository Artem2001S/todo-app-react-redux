import TodoItem from 'components/TodoItem/TodoItem';
import React from 'react';
import classes from './TodoList.module.scss';

export default function TodoList({ todos }) {
  return (
    <div className={classes.TodoListContainer}>
      <h1 className={classes.Title}>todos</h1>
      <div className={classes.TodoList}>
        {todos.map(({ id, text, isCompleted }) => (
          <TodoItem key={id} text={text} isCompleted={isCompleted} />
        ))}
      </div>
    </div>
  );
}
