import { useReducer } from 'react';
import { cartInitialState, cartReducer } from '../reducers/cart';

// we create a custom hook to implement the useReducer hook
export function useCartReducer() {
  // use reducer will manage the state and the dispatch function
  // the dispatch function its the one that SENDS the action object
  // to the reducer function
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  // here the product argument is the product to be added or to be removed
  function addToCart(product) {
    return dispatch({ type: 'ADD_TO_CART', payload: product });
  }

  function removeFromCart(product) {
    return dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  }

  function clearCart() {
    return dispatch({ type: 'CLEAR_CART' });
  }

  return { state, addToCart, removeFromCart, clearCart };
}
