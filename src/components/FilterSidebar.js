import React from 'react';
import '../styles/FilterSidebar.css';

function FilterSidebar() {
  return (
    <aside className="filter-sidebar">
      <h3>Filters</h3>
      <label>
        <input type="checkbox" /> Ideal For
      </label>
      <label>
        <input type="checkbox" /> Occasion
      </label>
      <label>
        <input type="checkbox" /> Work
      </label>
      <label>
        <input type="checkbox" /> Fabric
      </label>
      <label>
        <input type="checkbox" /> Segment
      </label>
      <label>
        <input type="checkbox" /> Suitable For
      </label>
      <label>
        <input type="checkbox" /> Raw Materials
      </label>
      <label>
        <input type="checkbox" /> Pattern
      </label>
    </aside>
  );
}

export default FilterSidebar;