import React from 'react';
import PropTypes from 'prop-types';
import classes from './StatusBar.module.scss';

const StatusBar = ({ notCompletedTodosCount }) => {
  return (
    <div className={classes.StatusBar}>
      {notCompletedTodosCount} item{notCompletedTodosCount !== 1 && 's'} left
    </div>
  );
};

StatusBar.propTypes = {
  notCompletedTodosCount: PropTypes.number,
};

export default React.memo(StatusBar);
