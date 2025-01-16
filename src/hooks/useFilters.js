import { useContext } from 'react';
import { FiltersContext } from '../context/filters';

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

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
