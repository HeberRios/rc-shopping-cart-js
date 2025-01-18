import { useId } from 'react';
import { AddToCartIcon, CartIcon, RemoveFromCartIcon } from './Icons';

function CartItem() {
  return (
    <li className='cart-item'>
      <img
        src='https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png'
        alt='A fruit with brown peel and green inside called kiwi'
      />

      <p className='product-title'>Kiwi</p>

      <span className='product-price'>$2.49</span>

      <footer>
        <button className='btn remove-to-cart-btn'>
          <RemoveFromCartIcon />
        </button>

        <div className='quantity-wrapper'>
          <span>Qty:</span>
          <p>10</p>
        </div>

        <button className='btn add-to-cart-btn'>
          <AddToCartIcon />
        </button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();

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
        <ul>
          <CartItem />
        </ul>
      </aside>
    </>
  );
}
