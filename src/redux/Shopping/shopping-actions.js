import * as actionTypes from "./shopping-types";

export const addToCart = (item) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      item
    }
  };
};
export const increment = (itemID) => {
  return {
    type: actionTypes.increment,
    payload: {
      id: itemID
    },
  };
};


export const decrement = (itemID) => {
  return {
    type: actionTypes.decrement,
    payload: {
      id: itemID
    },
  };
};
export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};


