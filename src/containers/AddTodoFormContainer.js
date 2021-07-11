import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddTodoForm from 'components/AddTodoForm/AddTodoForm';
import { todoAdded } from 'redux/reducers/todos';

const AddTodoFormContainer = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
    const text = inputValue.trim();
    if (text) {
      dispatch(todoAdded(text));
    }
  };

  return (
    <AddTodoForm
      value={inputValue}
      onValueChange={handleInputChange}
      onSubmit={handleFormSubmit}
    />
  );
};

export default AddTodoFormContainer;
