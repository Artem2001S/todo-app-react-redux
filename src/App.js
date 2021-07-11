import React from 'react';
import TodoListContainer from 'containers/TodoListContainer';
import 'globalStyles/index.scss';
import AddTodoForm from 'components/AddTodoForm/AddTodoForm';

function App() {
  return (
    <div className="App">
      <AddTodoForm />
      <TodoListContainer />
    </div>
  );
}

export default App;
