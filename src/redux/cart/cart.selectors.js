import {createSelector} from 'reselect';


const selectCart = state => state.cart;   //refers to cart reducer state


export const selectCartItems = createSelector(       //passes in whole reducer state to then grab the individual state for cartItems
    selectCart,
    (cart) => cart.cartItems
);


export const selectCartItemsCount = createSelector(                   //based on cartItem reducer state => will count how many items there are in the cart
    selectCartItems,
    cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
)
