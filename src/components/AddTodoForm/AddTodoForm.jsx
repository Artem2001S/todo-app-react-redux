import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Input from 'components/UIComponents/Input/Input';
import classes from './AddTodoForm.module.scss';

const AddTodoForm = ({
  value,
  isZeroTodos,
  isAllCompleted,
  onValueChange,
  onSubmit,
  onToggleAll,
}) => {
  const toggleBtnClasses = classNames(
    {
      [classes.Hided]: isZeroTodos,
      [classes.AllCompleted]: isAllCompleted,
    },
    classes.ToggleAllBtn
  );

  return (
    <form className={classes.TodoForm} onSubmit={onSubmit}>
      <h1 className={classes.Title}>todos</h1>
      <div className={classes.Wrapper}>
        <Input
          className={classes.Input}
          value={value}
          onChange={onValueChange}
        />
        <button className={toggleBtnClasses} onClick={onToggleAll}>
          ❯
        </button>
      </div>
    </form>
  );
};

AddTodoForm.propTypes = {
  value: PropTypes.string,
  isZeroTodos: PropTypes.bool,
  isAllCompleted: PropTypes.bool,
  onValueChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onToggleAll: PropTypes.func.isRequired,
};

export default AddTodoForm;
