import { getAllProducts } from './services/products.js';
import { Products } from './components/Products.jsx';
import { Header } from './components/Header';
import './app.css';
import { useFilters } from './hooks/useFilters.js';
import { Cart } from './components/Cart.jsx';

const initialProducts = await getAllProducts();

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
      <Header />
      <Cart/>
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
