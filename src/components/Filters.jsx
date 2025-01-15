export function Filters() {
  return (
    <section className='filters-container container'>
      <input type='range' name='price-range' id='price-range' />
      <select name='category' id='category'>
        <option value='all'>All</option>
        <option value='beauty'>Beauty</option>
        <option value='fragrances'>Fragrances</option>
        <option value='furniture'>Furniture</option>
        <option value='groceries'>Groceries</option>
      </select>
    </section>
  );
}
