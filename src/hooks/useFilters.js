import { useState } from 'react';

export function useFilters() {
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: 'all',
  });

  function filterProducts(products) {
    const filteredProducts = products.filter(function (product) {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });

    return filteredProducts;
  }

  return {
    filters,
    setFilters,
    filterProducts,
  };
}
