import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completedTodoDeleted } from 'redux/reducers/todos';
import Footer from 'components/Footer/Footer';
import { makeGetNotCompletedTodosCount } from 'redux/selectors/todosSelectors';

const FooterContainer = () => {
  const dispatch = useDispatch();

  const handleClearCompletedBtnClick = () => dispatch(completedTodoDeleted());

  const haveCompletedTodos = useSelector((state) =>
    state.todos.some((todo) => todo.isCompleted === true)
  );

  const todosCount = useSelector((state) => state.todos.length);

  const getNotCompletedTodosCount = makeGetNotCompletedTodosCount();

  const notCompletedTodosCount = useSelector((state) =>
    getNotCompletedTodosCount(state)
  );

  return (
    <>
      {todosCount > 0 && (
        <Footer
          notCompletedTodosCount={notCompletedTodosCount}
          onClearCompletedBtnClick={handleClearCompletedBtnClick}
          showClearCompletedBtn={haveCompletedTodos}
        />
      )}
    </>
  );
};

export default FooterContainer;
