import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/UIComponents/Input/Input';
import classes from './AddTodoForm.module.scss';

const AddTodoForm = ({ value, onValueChange, onSubmit }) => {
  return (
    <form className={classes.TodoForm} onSubmit={onSubmit}>
      <h1 className={classes.Title}>todos</h1>
      <Input className={classes.Input} value={value} onChange={onValueChange} />
    </form>
  );
};

AddTodoForm.propTypes = {
  value: PropTypes.string,
  onValueChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddTodoForm;
