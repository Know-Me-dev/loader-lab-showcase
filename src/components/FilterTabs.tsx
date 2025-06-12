
import React from 'react';

export const FilterTabs = ({ tags, activeFilter, onFilterChange }) => {
  const allFilters = ['all', ...tags];

  return (
    <div className="flex flex-wrap gap-2">
      {allFilters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all capitalize ${
            activeFilter === filter
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
          }`}
        >
          {filter === 'all' ? 'All' : filter}
        </button>
      ))}
    </div>
  );
};
