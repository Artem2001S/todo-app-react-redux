import React from 'react';
import TodoListContainer from 'containers/TodoListContainer';
import 'globalStyles/index.scss';
import AddTodoFormContainer from 'containers/AddTodoFormContainer';

function App() {
  return (
    <div className="App">
      <AddTodoFormContainer />
      <TodoListContainer />
    </div>
  );
}

export default App;
