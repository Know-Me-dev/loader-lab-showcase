
import React, { useState } from 'react';

export const FilterTabs = ({ tags, activeFilter, onFilterChange }) => {
  const allFilters = ['all', ...tags];
  const [showAll, setShowAll] = useState(false);
  const VISIBLE_COUNT = 6;

  const visibleFilters = showAll ? allFilters : allFilters.slice(0, VISIBLE_COUNT);
  const hasMore = allFilters.length > VISIBLE_COUNT;

  return (
    <div className="flex flex-wrap gap-2 items-center justify-center sm:justify-start">
      {visibleFilters.map((filter) => (
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
      {hasMore && (
        <button
          onClick={() => setShowAll((v) => !v)}
          className="px-4 py-2 rounded-full text-sm font-medium transition-all capitalize border border-border
            bg-muted text-muted-foreground
            dark:bg-muted/0 dark:text-muted-foreground
            bg-gray-100 text-gray-700
            hover:bg-gray-200 hover:text-gray-900
            dark:hover:bg-muted/60 dark:hover:text-foreground"
          style={{ minWidth: 100 }}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};
