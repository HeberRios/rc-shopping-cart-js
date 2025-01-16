import { useId } from 'react';
import { CartIcon } from './Icons';

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

      <aside className='cart'></aside>
    </>
  );
}
