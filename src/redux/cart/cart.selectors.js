import {createSelector} from 'reselect';


const selectCart = state => state.cart;   //refers to cart reducer state


export const selectCartItems = createSelector(       //passes in whole reducer state to then grab the individual state for cartItems
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(       //passes in whole reducer state to then grab the individual state for hidden
    [selectCart],
    cart => cart.hidden
);


export const selectCartItemsCount = createSelector(                   //based on cartItem reducer state => will count how many items there are in the cart
    [selectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
)


export const selectCartItemsTotal = createSelector(                   //gets total price => same as above but to get price we times quantity of the cartitem by the price of the cartItem
    [selectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0)
)
