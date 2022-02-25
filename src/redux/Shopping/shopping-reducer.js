import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  cart: [],
  totalamount:0,
};
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
     cart:action.payload.item
      };

      case actionTypes.increment:
        return {
            ...state,
            cart:state.cart.map((item)=> item.id===action.payload.id?{...item,qty:item.qty+1}:item)
          }

          case actionTypes.decrement:
            return {
                ...state,
                cart:state.cart.map((item)=> item.id===action.payload.id?{...item,qty:item.qty-1}:item)
              }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default shopReducer;
