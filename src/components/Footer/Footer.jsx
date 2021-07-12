import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import StatusBar from './StatusBar/StatusBar';
import Filters from './Filters/Filters';
import classes from './Footer.module.scss';

const Footer = ({
  notCompletedTodosCount,
  filters,
  haveCompletedTodos,
  onClearCompletedBtnClick,
  onFilterChanged,
}) => {
  const clearCompletedBtnClasses = classNames(
    { [classes.Hided]: !haveCompletedTodos },
    classes.ClearCompletedBtn
  );

  return (
    <div className={classes.Footer}>
      <StatusBar notCompletedTodosCount={notCompletedTodosCount} />
      <Filters filters={filters} onFilterChanged={onFilterChanged} />
      <button
        className={clearCompletedBtnClasses}
        onClick={onClearCompletedBtnClick}
      >
        Clear completed
      </button>
    </div>
  );
};

Footer.propTypes = {
  notCompletedTodosCount: PropTypes.number.isRequired,
  filters: PropTypes.array.isRequired,
  haveCompletedTodos: PropTypes.bool,
  onClearCompletedBtnClick: PropTypes.func.isRequired,
  onFilterChanged: PropTypes.func.isRequired,
};

export default React.memo(Footer);
