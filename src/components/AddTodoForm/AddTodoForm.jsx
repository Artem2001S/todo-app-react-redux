import React from 'react';
import Input from 'components/UIComponents/Input/Input';
import classes from './AddTodoForm.module.scss';

const AddTodoForm = ({ value, onValueChange }) => {
  return (
    <div className={classes.TodoForm}>
      <h1 className={classes.Title}>todos</h1>
      <Input className={classes.Input} value={value} onChange={onValueChange} />
    </div>
  );
};

export default AddTodoForm;
