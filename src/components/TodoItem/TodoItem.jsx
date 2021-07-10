import React from 'react';
import classNames from 'classnames';
import Checkbox from 'components/UIComponents/Checkbox/Checkbox';
import classes from './TodoItem.module.scss';

export default function TodoItem({ text, isCompleted, isEditMode = false }) {
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
        <Checkbox isChecked={isCompleted} />
      </div>

      {isEditMode ? (
        <input className={classes.TodoItemInput} type="text" value={text} />
      ) : (
        <span className={todoTextClasses}>{text}</span>
      )}

      {!isEditMode && <button className={classes.DeleteBtn}>&times;</button>}
    </div>
  );
}
