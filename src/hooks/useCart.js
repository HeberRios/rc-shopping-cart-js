import { useContext } from 'react';
import { CartContext } from '../context/cart';

export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error(
      'The useCart hook must be used within the cartProvider, to have access to the CartContext'
    );
  }

  return context;
}
