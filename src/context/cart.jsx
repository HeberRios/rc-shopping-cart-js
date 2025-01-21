import { createContext } from 'react';
import { useCartReducer } from '../hooks/useCartReducer';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const {
    state: cart,
    addToCart,
    removeUnitFromCart,
    removeFromCart,
    clearCart,
  } = useCartReducer();

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeUnitFromCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
