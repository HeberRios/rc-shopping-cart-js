import { CartIcon } from './Icons';
import { SearchBar } from './SearchBar';

export function Header() {
  return (
    <header className='header-section container'>
      <div className='main-header-container'>
        <h1>Shopping Cart App</h1>
        <CartIcon />
      </div>

      <SearchBar />
    </header>
  );
}
