import { useContext } from 'react';
import { CartContext } from '../context/cart';

// we are going to use the useCart custom hook to provide the context where is
// needed

// as a good practice is good to check if the context is being requested inside
// the context provider
export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error(
      'The useCart hook must be used within the cartProvider, to have access to the CartContext'
    );
  }

  return context;
}
