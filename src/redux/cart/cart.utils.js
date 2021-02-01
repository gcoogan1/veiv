//addItemToCart takes in existing state and the new action payload(new item)
//it checks if the cart item id matches any item that may be in the cart already
//if there is a match the quantity is increased by one
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existsingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  if (existsingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : { cartItem }
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  //If the item quantity is 1, then remove just remove it
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id); //only keeps the cartItems that do not match the item that needs to be removed
  }

  //Otherwise map through the quantity and decrease by one
  return cartItems.map(
    cartItem =>
      cartItem.id === cartItemToRemove.id //IF the ids match, then decrease by one
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem //Otherwise just return the cartItem bc it does not need to be removed
  );
};
