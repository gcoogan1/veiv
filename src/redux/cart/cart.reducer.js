import {CartActionTypes} from './cart.types';

const intialState = {
    hidden: true
  };
  
  const cartReducer = (state = intialState, action) => {
    switch (action.type) {
      case CartActionTypes.TOGGLE_CART_HIDDEN:
        return{
              ...state,
              hidden: !state.hidden
        };
  
      default:
        return state;
    }
  };
  
  
  export default cartReducer;