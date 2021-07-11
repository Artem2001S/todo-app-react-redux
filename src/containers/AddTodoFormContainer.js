import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allTodosToggled, todoAdded } from 'redux/reducers/todos';
import AddTodoForm from 'components/AddTodoForm/AddTodoForm';

const AddTodoFormContainer = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const isZeroTodos = !todos.length;
  const isAllCompleted = todos.every((todo) => todo.isCompleted);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
    const text = inputValue.trim();
    if (text) {
      dispatch(todoAdded(text));
    }
  };

  const handleToggleAllBtnClick = () => dispatch(allTodosToggled());

  return (
    <AddTodoForm
      value={inputValue}
      onValueChange={handleInputChange}
      onSubmit={handleFormSubmit}
      isZeroTodos={isZeroTodos}
      isAllCompleted={isAllCompleted}
      onToggleAll={handleToggleAllBtnClick}
    />
  );
};

export default AddTodoFormContainer;
