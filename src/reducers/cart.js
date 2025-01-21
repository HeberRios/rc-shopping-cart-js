export const cartInitialState =
  JSON.parse(window.localStorage.getItem('cart')) || [];

function updateLocalStorage(state) {
  window.localStorage.setItem('cart', JSON.stringify(state));
}

const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
};

const STATE_UPDATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: function (state, actionObj) {
    const { id } = actionObj.payload;

    const productInCartIndex = state.findIndex(function (item) {
      return item.id === id;
    });

    if (productInCartIndex >= 0) {
      const newState = [
        ...state.slice(0, productInCartIndex),

        {
          ...state[productInCartIndex],
          quantity: state[productInCartIndex].quantity + 1,
        },

        ...state.slice(productInCartIndex + 1),
      ];

      updateLocalStorage(newState);
      return newState;
    }

    const newState = [...state, { ...actionObj.payload, quantity: 1 }];

    updateLocalStorage(newState);
    return newState;
  },

  [CART_ACTION_TYPES.REMOVE_FROM_CART]: function (state, actionObj) {
    const { id } = actionObj.payload;

    const newState = state.filter(function (item) {
      return item.id !== id;
    });

    updateLocalStorage(newState);
    return newState;
  },

  [CART_ACTION_TYPES.CLEAR_CART]: function () {
    updateLocalStorage([]);
    return [];
  },
};

export function cartReducer(state, actionObj) {
  const { type: actionType } = actionObj;

  const updateState = STATE_UPDATE_BY_ACTION[actionType];

  return updateState ? updateState(state, actionObj) : state;
}
