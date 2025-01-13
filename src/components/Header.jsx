import { SearchBar } from './SearchBar';

export function Header() {
  return (
    <header className='header-section'>
      <div className='main-header-container'>
        <h1>Shopping Cart App</h1>
        <img
          src='../../src/assets/icons/shopping-cart.svg'
          alt='white shopping cart'
          className='header-cart-icon'
        />
      </div>

      <SearchBar />
    </header>
  );
}
