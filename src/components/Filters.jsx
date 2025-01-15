import { useFilters } from '../hooks/useFilters';

export function Filters() {
  const { filters, setFilters } = useFilters();

  function handlePriceChange(e) {
    setFilters(function (prevState) {
      return { ...prevState, minPrice: e.target.value };
    });
  }

  function handleCategoryChange(e) {
    setFilters(function (prevState) {
      return {
        ...prevState,
        category: e.target.value,
      };
    });
  }

  return (
    <section className='filters-container container'>
      <label htmlFor='price-range'>
        Starting price:
        <input
          type='range'
          name='price-range'
          id='price-range'
          min='0'
          max='800'
          value={filters.minPrice}
          onChange={handlePriceChange}
        />
      </label>

      <label htmlFor='category:'>
        Category:
        <select
          name='category'
          id='category'
          value={filters.category}
          onChange={handleCategoryChange}
        >
          <option value='all'>All</option>
          <option value='beauty'>Beauty</option>
          <option value='fragrances'>Fragrances</option>
          <option value='furniture'>Furniture</option>
          <option value='groceries'>Groceries</option>
        </select>
      </label>
    </section>
  );
}
