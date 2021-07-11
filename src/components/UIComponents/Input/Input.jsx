import React from 'react';
import classes from './Input.module.scss';

const Input = ({ value, onChange, onBlur, autoFocus = false }) => {
  return (
    <input
      className={classes.Input}
      type="text"
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      autoFocus={autoFocus}
    />
  );
};

export default Input;
