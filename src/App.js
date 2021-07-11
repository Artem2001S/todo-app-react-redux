import React from 'react';
import TodoListContainer from 'containers/TodoListContainer';
import AddTodoFormContainer from 'containers/AddTodoFormContainer';
import FooterContainer from 'containers/FooterContainer';
import 'globalStyles/index.scss';

function App() {
  return (
    <div className="App">
      <AddTodoFormContainer />
      <TodoListContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
