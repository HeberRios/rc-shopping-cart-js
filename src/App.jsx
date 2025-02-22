import { getAllProducts } from './services/products.js';
import { Products } from './components/Products.jsx';
import { Header } from './components/Header';
import './app.css';
import { useFilters } from './hooks/useFilters.js';
import { Cart } from './components/Cart.jsx';
import { CartProvider } from './context/cart.jsx';

const initialProducts = await getAllProducts();

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  );
}

export default App;
