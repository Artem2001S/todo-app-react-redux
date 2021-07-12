import React from 'react';
import PropTypes from 'prop-types';
import classes from './Checkbox.module.scss';

const Checkbox = ({ isChecked, onCheckedChanged }) => {
  return (
    <div className={classes.CheckboxContainer}>
      <input
        className={classes.CheckboxInput}
        type="checkbox"
        checked={isChecked}
        readOnly
      />
      <span className={classes.Checkbox} onClick={onCheckedChanged} />
    </div>
  );
};

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  onCheckedChanged: PropTypes.func,
};

export default React.memo(Checkbox);
