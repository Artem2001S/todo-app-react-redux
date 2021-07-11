import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TodoItem from 'components/TodoItem/TodoItem';
import { todoDeleted, todoTextChanged } from 'redux/reducers/todos';

export const TodoItemContainer = ({ todo, deleteTodo }) => {
  const dispatch = useDispatch();

  const handleDeleteBtnClick = () => {
    dispatch(todoDeleted(todo.id));
  };

  const [isEditMode, setIsEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(todo.text);

  const handleTodoDoubleClick = () => {
    setIsEditMode(true);
    setInputValue(todo.text);
  };

  const handleTodoInputBlur = () => {
    setIsEditMode(false);

    const newText = inputValue.trim();
    if (inputValue.trim()) {
      dispatch(todoTextChanged({ id: todo.id, text: newText }));
    } else {
      dispatch(todoDeleted(todo.id));
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <TodoItem
      text={todo.text}
      isCompleted={todo.isCompleted}
      isEditMode={isEditMode}
      inputValue={inputValue}
      onTodoDelete={handleDeleteBtnClick}
      onTodoInputBlur={handleTodoInputBlur}
      onTodoDoubleClick={handleTodoDoubleClick}
      onInputChange={handleInputChange}
    />
  );
};
