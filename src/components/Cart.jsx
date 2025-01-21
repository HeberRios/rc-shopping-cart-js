import { useId } from 'react';
import {
  AddToCartIcon,
  CartIcon,
  ClearCartIcon,
  RemoveFromCartIcon,
} from './Icons';
import { useCart } from '../hooks/useCart';

function CartItem({ thumbnail, title, price, quantity, addToCart }) {
  return (
    <li className='cart-item'>
      <img src={thumbnail} alt={title} />

      <p className='product-title'>{title}</p>

      <span className='product-price'>{price}</span>

      <footer>
        <button className='btn remove-to-cart-btn'>
          <RemoveFromCartIcon />
        </button>

        <div className='quantity-wrapper'>
          <span>Qty:</span>
          <p>{quantity}</p>
        </div>

        <button className='btn add-to-cart-btn' onClick={addToCart}>
          <AddToCartIcon />
        </button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, addToCart, clearCart } = useCart();

  return (
    <>
      <label className='cart-label-icon' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>

      <input
        className='cart-check-box'
        type='checkbox'
        name='cart'
        id={cartCheckboxId}
      />

      <aside className='cart'>
        <ul className='cart-product-list'>
          {cart.map(function (product) {
            return (
              <CartItem
                key={product.id}
                // here we are spreading the product properties to be received
                // as the properties for our cart component
                {...product}
                addToCart={function () {
                  addToCart(product);
                }}
              ></CartItem>
            );
          })}
        </ul>

        <button
          className='btn clear-cart-btn'
          onClick={function () {
            clearCart();
          }}
        >
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
