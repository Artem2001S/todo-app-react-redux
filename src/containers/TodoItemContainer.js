import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  todoDeleted,
  todoTextChanged,
  todoToggled,
} from 'redux/reducers/todos';
import TodoItem from 'components/TodoItem/TodoItem';

const TodoItemContainer = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDeleteBtnClick = useCallback(() => {
    dispatch(todoDeleted(todo.id));
  }, [dispatch, todo.id]);

  const [isEditMode, setIsEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(todo.text);

  const handleTodoDoubleClick = useCallback(() => {
    setIsEditMode(true);
    setInputValue(todo.text);
  }, [todo]);

  const handleCheckboxClick = useCallback(() => {
    dispatch(todoToggled(todo.id));
  }, [dispatch, todo]);

  const handleTodoInputBlur = useCallback(() => {
    setIsEditMode(false);

    const newText = inputValue.trim();
    if (inputValue.trim()) {
      dispatch(todoTextChanged({ id: todo.id, text: newText }));
    } else {
      dispatch(todoDeleted(todo.id));
    }
  }, [dispatch, inputValue, todo]);

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleInputKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  }, []);

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
      onTodoToggle={handleCheckboxClick}
      onInputKeyPress={handleInputKeyPress}
    />
  );
};

TodoItemContainer.propTypes = {
  todo: PropTypes.exact({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }),
};

export default React.memo(TodoItemContainer);
