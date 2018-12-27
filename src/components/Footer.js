import React from 'react';
import FilterLink from './FilterLink';
import { Filters } from '../redux/VisibilityFilter/VisibilityFilter';

const Footer = ({ filter, onFilterChange }) => (
  <p>
    Show:{' '}
    <FilterLink
      name="All"
      isAcitve={filter === Filters.SHOW_ALL}
      onClick={() => onFilterChange(Filters.SHOW_ALL)}
    />
    {', '}
    {/* completed */}
    <FilterLink
      name="Completed"
      isAcitve={filter === Filters.SHOW_COMPLETED}
      onClick={() => onFilterChange(Filters.SHOW_COMPLETED)}
    />
    {', '}
    {/* active */}
    <FilterLink
      name="Active"
      isAcitve={filter === Filters.SHOW_ACTIVR}
      onClick={() => onFilterChange(Filters.SHOW_ACTIVE)}
    />
  </p>
);
