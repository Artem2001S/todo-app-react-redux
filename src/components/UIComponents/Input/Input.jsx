import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Input.module.scss';

const Input = ({
  className,
  value,
  autoFocus = false,
  onChange,
  onBlur,
  onKeyPress,
}) => {
  const computedClasses = classNames(classes.Input, className);
  return (
    <input
      className={computedClasses}
      type="text"
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onKeyPress={onKeyPress}
      autoFocus={autoFocus}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onKeyPress: PropTypes.func,
  autoFocus: PropTypes.bool,
};

export default Input;
