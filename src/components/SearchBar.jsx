export function SearchBar() {
  return (
    <form action='' className='product-search-form'>
      <input
        type='text'
        name='search-input'
        id='search-input'
        className='search-bar'
        placeholder='RTX 5090...'
      />

      <button type='submit' id='search-button' className='btn search-btn'>
        <img
          src='../../src/assets/icons/search.svg'
          alt='white magnifier'
          className='search-icon'
        />
      </button>
    </form>
  );
}
