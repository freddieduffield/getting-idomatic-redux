import React from 'react';
import FilterLink from './FilterLink';

const Footer = ({ onFilterClick, visibilityFilter }) => (
  <p>
    Show:{' '}
    <FilterLink
      name="All"
      currentFilter={visibilityFilter}
      // isAcitve={filter === Filters.SHOW_ALL}
      onClick={onFilterClick}
    />
    {', '}
    <FilterLink
      name="Completed"
      currentFilter={visibilityFilter}
      // isAcitve={filter === Filters.SHOW_COMPLETED}
      onClick={onFilterClick}
    />
    {', '}
    <FilterLink
      name="Active"
      currentFilter={visibilityFilter}
      // isAcitve={filter === Filters.SHOW_ACTIVE}
      onClick={onFilterClick}
    />
  </p>
);

export default Footer;
