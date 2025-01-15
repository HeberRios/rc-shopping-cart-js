export function Filters() {
  return (
    <section className='filters-container container'>
      <label htmlFor='price-range'>
        Starting price:
        <input type='range' name='price-range' id='price-range' />
      </label>

      <label htmlFor='category:'>
        Category:
        <select name='category' id='category'>
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
