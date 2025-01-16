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
      <div className='filter-input-container'>
        <label htmlFor='price-range'>
          Starting price:
          <span className='starting-price'>{filters.minPrice}</span>
        </label>
        <input
          type='range'
          name='price-range'
          id='price-range'
          min='0'
          max='800'
          value={filters.minPrice}
          onChange={handlePriceChange}
        />
      </div>

      <div className='filter-input-container'>
        <label htmlFor='category:'>Category:</label>
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
      </div>
    </section>
  );
}
