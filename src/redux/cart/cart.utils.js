
//addItemToCart takes in existing state and the new action payload(new item)
//it checks if the cart item id matches any item that may be in the cart already
//if there is a match the quantity is increased by one
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existsingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        )
    if(existsingCartItem) {
        return cartItems.map(cartItem => 
                cartItem.id === cartItemToAdd.id 
                ? {...cartItem, quantity: cartItem.quantity + 1} 
                : {cartItem}
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1 }]
}