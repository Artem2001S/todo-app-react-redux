import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Checkbox from 'components/UIComponents/Checkbox/Checkbox';
import Input from 'components/UIComponents/Input/Input';
import classes from './TodoItem.module.scss';

const TodoItem = ({
  text,
  isCompleted,
  isEditMode = false,
  inputValue,
  onTodoDelete,
  onTodoDoubleClick,
  onTodoInputBlur,
  onInputChange,
  onInputKeyPress,
  onTodoToggle,
}) => {
  const checkboxContainerClasses = classNames(
    {
      [classes.Hided]: isEditMode,
    },
    classes.CheckboxContainer
  );

  const todoItemClasses = classNames(
    {
      [classes.Editing]: isEditMode,
    },
    classes.TodoItem
  );

  const todoTextClasses = classNames(
    {
      [classes.Completed]: isCompleted,
    },
    classes.TodoItemText
  );

  return (
    <div className={todoItemClasses}>
      <div className={checkboxContainerClasses}>
        <Checkbox isChecked={isCompleted} onCheckedChanged={onTodoToggle} />
      </div>

      {isEditMode ? (
        <Input
          value={inputValue}
          onChange={onInputChange}
          onBlur={onTodoInputBlur}
          onKeyPress={onInputKeyPress}
          autoFocus={true}
        />
      ) : (
        <div
          className={todoTextClasses}
          onDoubleClick={onTodoDoubleClick}
          onTouchEnd={onTodoDoubleClick}
        >
          {text}
        </div>
      )}

      {!isEditMode && (
        <button className={classes.DeleteBtn} onClick={onTodoDelete}>
          &times;
        </button>
      )}
    </div>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  isEditMode: PropTypes.bool,
  inputValue: PropTypes.string.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  onTodoDoubleClick: PropTypes.func.isRequired,
  onTodoInputBlur: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onTodoToggle: PropTypes.func.isRequired,
  onInputKeyPress: PropTypes.func.isRequired,
};

export default React.memo(TodoItem);
