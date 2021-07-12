import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completedTodoDeleted } from 'redux/reducers/todos';
import { makeGetNotCompletedTodosCount } from 'redux/selectors/todosSelectors';
import { filterChanged } from 'redux/reducers/filters';
import Footer from 'components/Footer/Footer';

const FooterContainer = () => {
  const dispatch = useDispatch();

  const handleClearCompletedBtnClick = () => dispatch(completedTodoDeleted());

  const haveCompletedTodos = useSelector((state) =>
    state.todos.some((todo) => todo.isCompleted === true)
  );

  const todosCount = useSelector((state) => state.todos.length);
  const filters = useSelector((state) => state.filters);

  const getNotCompletedTodosCount = makeGetNotCompletedTodosCount();

  const notCompletedTodosCount = useSelector((state) =>
    getNotCompletedTodosCount(state)
  );

  const handleFilterChanged = (e) => {
    const id = Number(e.target.dataset.id);
    dispatch(filterChanged({ filterId: id }));
  };

  return (
    <>
      {todosCount > 0 && (
        <Footer
          notCompletedTodosCount={notCompletedTodosCount}
          haveCompletedTodos={haveCompletedTodos}
          filters={filters}
          onClearCompletedBtnClick={handleClearCompletedBtnClick}
          onFilterChanged={handleFilterChanged}
        />
      )}
    </>
  );
};

export default FooterContainer;
