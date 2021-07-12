import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completedTodoDeleted } from 'redux/reducers/todosReducer';
import {
  getCompletedTodosCount,
  getNotCompletedTodosCount,
  getTodosCount,
} from 'redux/selectors/todosSelectors';
import { filterChanged } from 'redux/reducers/filtersReducer';
import Footer from 'components/Footer/Footer';

const FooterContainer = () => {
  const dispatch = useDispatch();

  const handleClearCompletedBtnClick = useCallback(
    () => dispatch(completedTodoDeleted()),
    [dispatch]
  );

  const completedTodosCount = useSelector((state) =>
    getCompletedTodosCount(state)
  );

  const haveCompletedTodos = useMemo(
    () => completedTodosCount > 0,
    [completedTodosCount]
  );

  const todosCount = useSelector((state) => getTodosCount(state));
  const filters = useSelector((state) => state.filters);

  const notCompletedTodosCount = useSelector((state) =>
    getNotCompletedTodosCount(state)
  );

  const handleFilterChanged = useCallback(
    (e) => {
      const id = Number(e.target.dataset.id);
      dispatch(filterChanged({ filterId: id }));
    },
    [dispatch]
  );

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

export default React.memo(FooterContainer);
