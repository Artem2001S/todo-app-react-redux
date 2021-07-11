import React from 'react';
import classNames from 'classnames';
import Checkbox from 'components/UIComponents/Checkbox/Checkbox';
import classes from './TodoItem.module.scss';

export default function TodoItem({
  text,
  isCompleted,
  isEditMode = false,
  inputValue,
  onTodoDelete,
  onTodoDoubleClick,
  onTodoInputBlur,
  onInputChange,
}) {
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
    <div className={todoItemClasses} onDoubleClick={onTodoDoubleClick}>
      <div className={checkboxContainerClasses}>
        <Checkbox isChecked={isCompleted} />
      </div>

      {isEditMode ? (
        <input
          className={classes.TodoItemInput}
          type="text"
          value={inputValue}
          onBlur={onTodoInputBlur}
          onChange={onInputChange}
          autoFocus
        />
      ) : (
        <span className={todoTextClasses}>{text}</span>
      )}

      {!isEditMode && (
        <button className={classes.DeleteBtn} onClick={onTodoDelete}>
          &times;
        </button>
      )}
    </div>
  );
}
