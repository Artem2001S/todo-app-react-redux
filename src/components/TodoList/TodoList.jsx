import React from 'react';
import PropTypes from 'prop-types';
import classes from './TodoList.module.scss';

const TodoList = ({ children }) => {
  return (
    <div className={classes.TodoListContainer}>
      <h1 className={classes.Title}>todos</h1>
      <div className={classes.TodoList}>{children}</div>
    </div>
  );
};

TodoList.propTypes = {
  children: PropTypes.node,
};
export default TodoList;
