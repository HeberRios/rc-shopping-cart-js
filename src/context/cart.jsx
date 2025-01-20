import { createContext } from 'react';
import { useCartReducer } from '../hooks/useCartReducer';

export const CartContext = createContext();


export function CartProvider({ children }) {
  const {
    state: cart,
    addToCart,
    removeFromCart,
    clearCart,
  } = useCartReducer();

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
