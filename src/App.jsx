import { getAllProducts } from './services/products.js';
import { Products } from './components/Products.jsx';
import { Header } from './components/Header';
import './app.css';
import { useFilters } from './hooks/useFilters.js';

const initialProducts = await getAllProducts();

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
