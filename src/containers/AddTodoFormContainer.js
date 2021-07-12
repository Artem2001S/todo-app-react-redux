import React, { useCallback, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allTodosToggled, todoAdded } from 'redux/reducers/todosReducer';
import AddTodoForm from 'components/AddTodoForm/AddTodoForm';

const AddTodoFormContainer = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const isZeroTodos = useMemo(() => !todos.length, [todos]);

  const isAllCompleted = useMemo(
    () => todos.every((todo) => todo.isCompleted),
    [todos]
  );

  const handleInputChange = useCallback(
    (e) => setInputValue(e.target.value),
    []
  );

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setInputValue('');
      const text = inputValue.trim();
      if (text) {
        dispatch(todoAdded(text));
      }
    },
    [dispatch, inputValue]
  );

  const handleToggleAllBtnClick = useCallback(
    () => dispatch(allTodosToggled()),
    [dispatch]
  );

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

export default React.memo(AddTodoFormContainer);
