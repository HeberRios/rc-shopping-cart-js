import { useCart } from '../hooks/useCart';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';

export function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart();

  function checkProductIsInCart(product) {
    return cart.some(function (item) {
      return item.id === product.id;
    });
  }

  return (
    <main className='products-container container'>
      <ul className='products-list'>
        {products.map(function (product) {
          const isProductInCart = checkProductIsInCart(product);

          return (
            <li key={product.id} className='product-item'>
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.description.slice(0, 80).trim().concat('...')}</p>
              <span>${product.price}</span>
              <button
                className={isProductInCart ? 'btn remove-bg' : 'btn'}
                onClick={function () {
                  isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product);
                }}
              >
                {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
