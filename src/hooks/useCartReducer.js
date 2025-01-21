import { useReducer } from 'react';
import { cartInitialState, cartReducer } from '../reducers/cart';

export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  function addToCart(product) {
    return dispatch({ type: 'ADD_TO_CART', payload: product });
  }

  function removeUnitFromCart(product) {
    return dispatch({ type: 'REMOVE_UNIT_FROM_CART', payload: product });
  }

  function removeFromCart(product) {
    return dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  }

  function clearCart() {
    return dispatch({ type: 'CLEAR_CART' });
  }

  return { state, addToCart, removeUnitFromCart, removeFromCart, clearCart };
}
