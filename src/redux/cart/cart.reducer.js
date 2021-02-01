import { CartActionTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const intialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
      
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // cartItems: [...state.cartItems, action.payload]
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          //compares the cartItem id to the id we want to remove => if the ids do not match then keep the cartItem; if they ids match then remove the cartItem
          cartItem => cartItem.id !== action.payload.id
        )
      };

    default:
      return state;
  }
};

export default cartReducer;
