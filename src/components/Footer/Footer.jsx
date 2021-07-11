import React from 'react';
import PropTypes from 'prop-types';
import classes from './Footer.module.scss';
import classNames from 'classnames';

const Footer = ({
  itemsCount,
  showClearCompletedBtn,
  onClearCompletedBtnClick,
}) => {
  const clearCompletedBtnClasses = classNames(
    { [classes.Hided]: !showClearCompletedBtn },
    classes.ClearCompletedBtn
  );

  return (
    <div className={classes.Footer}>
      <div className={classes.StatusBar}>{itemsCount} items left</div>
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
  itemsCount: PropTypes.number,
  showClearCompletedBtn: PropTypes.bool,
  onClearCompletedBtnClick: PropTypes.func.isRequired,
};

export default Footer;
