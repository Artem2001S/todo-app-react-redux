import React from 'react';
import PropTypes from 'prop-types';
import classes from './Filters.module.scss';
import FilterButton from './FilterButton/FilterButton';

const Filters = ({ filters, onFilterChanged }) => {
  return (
    <div className={classes.Filters}>
      {filters.map((filter) => (
        <FilterButton
          key={filter.id}
          filter={filter}
          onClick={onFilterChanged}
        />
      ))}
    </div>
  );
};

Filters.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      isActive: PropTypes.bool,
    })
  ),
};

export default Filters;
