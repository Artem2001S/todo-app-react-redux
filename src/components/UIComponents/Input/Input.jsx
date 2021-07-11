import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.scss';

const Input = ({ value, autoFocus = false, onChange, onBlur, onKeyPress }) => {
  return (
    <input
      className={classes.Input}
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
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onKeyPress: PropTypes.func,
  autoFocus: PropTypes.bool,
};

export default Input;
