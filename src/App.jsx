import { getAllProducts } from './services/products.js';
import { Products } from './components/Products.jsx';
import { Header } from './components/Header';
import './app.css';

const initialProducts = await getAllProducts();

function App() {
  return (
    <>
      <Header />
      <Products products={initialProducts} />
    </>
  );
}

export default App;
