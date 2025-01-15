import { useState } from 'react';

export function useFilters() {
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: 'all',
  });

  return {
    filters,
    setFilters,
  };
}
