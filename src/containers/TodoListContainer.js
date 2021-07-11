import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItemContainer } from './TodoItemContainer';
import TodoList from 'components/TodoList/TodoList';

export default function TodoListContainer() {
  const todos = useSelector((state) => state.todos);

  const renderedTodos = todos.map((todo, index) => (
    <TodoItemContainer key={index} todo={todo} />
  ));

  return <TodoList>{renderedTodos}</TodoList>;
}
