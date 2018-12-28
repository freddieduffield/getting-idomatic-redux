import React from 'react';

const FilterLink = ({ onClick, name, isAcitve }) => {
  if (isAcitve) {
    return <span>{name}</span>;
  }

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {name}
    </a>
  );
};

export default FilterLink;
