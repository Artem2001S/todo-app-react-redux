import React from 'react';
import { useSelector } from 'react-redux';
import { getVisibleTodoList } from 'redux/selectors/todosSelectors';
import TodoItemContainer from './TodoItemContainer';
import TodoList from 'components/TodoList/TodoList';

const TodoListContainer = () => {
  const visibleTodos = useSelector(getVisibleTodoList);

  const renderedTodos = visibleTodos.map((todo, index) => (
    <TodoItemContainer key={index} todo={todo} />
  ));

  return <TodoList>{renderedTodos}</TodoList>;
};

export default React.memo(TodoListContainer);
