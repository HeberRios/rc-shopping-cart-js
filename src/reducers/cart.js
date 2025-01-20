// we need to create the reducer function that will be used in the useReducer hook
// but first we need the action types and the actions to be performed:

// the action types that will be performed by the userReducer (with dispatch function)
const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
};

// the actual actions to be performed depending on the type of action provided
const STATE_UPDATE_BY_ACTION = {
  // this methods receive the state and an action, because to implement
  // the useReducer hook, we need to use a reducer function and this function
  // receives two arguments the current state and an action object with the info
  // of the action to perform

  [CART_ACTION_TYPES.ADD_TO_CART]: function (state, actionObj) {
    // here we are extracting the id of the product we want to add
    // and the payload property of the actionObj is the product itself with
    // all its properties but we are only extracting its id using the destructuring
    // assignment
    const { id } = actionObj.payload;

    const productInCartIndex = state.findIndex(function (item) {
      return item.id === id;
    });

    // if the product is in the cart the index will be greater or equal than 0
    if (productInCartIndex >= 0) {
      //  so we get all the products in the cart BEFORE the product being added,
      // then as the product is already in the cart, this will be also extracted from
      // the state but we will increment its quantity property by 1 and finally we
      // extract all the products that were after the product in question, in this case
      // this product is the one that will get its quantity increased
      const newState = [
        ...state.slice(0, productInCartIndex),

        {
          ...state[productInCartIndex],
          quantity: state[productInCartIndex].quantity + 1,
        },

        ...state.slice(productInCartIndex + 1),
      ];

      // all this is the new state for the cart
      return newState;
    }

    // if the product that triggered this action is not in the cart, then extract the cart state
    // and then add the new product and create a new property called quantity for it
    const newState = [...state, { ...actionObj.payload, quantity: 1 }];

    return newState;
  },

  [CART_ACTION_TYPES.REMOVE_FROM_CART]: function (state, actionObj) {
    const { id } = actionObj.payload;

    const newState = state.filter(function (item) {
      return item.id !== id;
    });

    // all the products that do not have the same id as the product we want to remove,
    // will be added to the new array

    return newState;
  },

  [CART_ACTION_TYPES.CLEAR_CART]: function () {
    return [];
  },
};
