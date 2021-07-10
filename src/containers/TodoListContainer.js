import TodoList from 'components/TodoList/TodoList';
import React from 'react';
import { useSelector } from 'react-redux';

export default function TodoListContainer() {
  const todos = useSelector((state) => state.todos);

  return <TodoList todos={todos} />;
}
