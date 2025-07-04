import React from 'react';

export default function Filters({
  filters,
  toggleFilter,
  types,
  colors
}) {
  return (
    <div className="filters">
      <h3>Filter Items</h3>

      <div className="filter-group">
        <strong>Type</strong>
        {types.map(t => (
          <label key={t}>
            <input
              type="checkbox"
              checked={filters.type.includes(t)}
              onChange={() => toggleFilter('type', t)}
            />{' '}
            {t}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <strong>Color</strong>
        {colors.map(c => (
          <label key={c}>
            <input
              type="checkbox"
              checked={filters.color.includes(c)}
              onChange={() => toggleFilter('color', c)}
            />{' '}
            {c}
          </label>
        ))}
      </div>
    </div>
  );
}
