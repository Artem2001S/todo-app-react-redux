import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import StatusBar from './StatusBar/StatusBar';
import classes from './Footer.module.scss';

const Footer = ({
  notCompletedTodosCount,
  showClearCompletedBtn,
  onClearCompletedBtnClick,
}) => {
  const clearCompletedBtnClasses = classNames(
    { [classes.Hided]: !showClearCompletedBtn },
    classes.ClearCompletedBtn
  );

  return (
    <div className={classes.Footer}>
      <StatusBar notCompletedTodosCount={notCompletedTodosCount} />
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
  showClearCompletedBtn: PropTypes.bool,
  onClearCompletedBtnClick: PropTypes.func.isRequired,
};

export default Footer;
