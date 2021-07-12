import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './FilterButton.module.scss';

const FilterButton = ({ filter, onClick }) => {
  return (
    <button
      className={classNames(
        { [classes.Active]: filter.isActive },
        classes.FilterButton
      )}
      data-id={filter.id}
      type="button"
      onClick={onClick}
    >
      {filter.value}
    </button>
  );
};

FilterButton.propTypes = {
  filter: PropTypes.exact({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
  }),
  onClick: PropTypes.func.isRequired,
};

export default React.memo(FilterButton);
