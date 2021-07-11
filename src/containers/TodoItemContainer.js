import React from 'react';
import { useDispatch } from 'react-redux';
import TodoItem from 'components/TodoItem/TodoItem';
import { todoDeleted } from 'redux/reducers/todos';

export const TodoItemContainer = ({ todo, deleteTodo }) => {
  const { id, text, isCompleted } = todo;

  const dispatch = useDispatch();

  const handleDeleteBtnClick = () => {
    dispatch(todoDeleted(id));
  };

  return (
    <TodoItem
      text={text}
      isCompleted={isCompleted}
      onTodoDelete={handleDeleteBtnClick}
    />
  );
};
