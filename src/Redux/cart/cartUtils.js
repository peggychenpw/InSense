export const addItemToCart = (cartItems, addItem, itemQuantity = 1) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.itemId === addItem.itemId
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.itemId === addItem.itemId
        ? { ...cartItem, quantity: cartItem.quantity + itemQuantity }
        : cartItem
    );
  }
  return [...cartItems, { ...addItem, quantity: itemQuantity }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.itemId === cartItemToRemove.itemId
  );
  if (existingCartItem.quantity === 1) {
    return cartItems;
  }
  return cartItems.map((cartItem) =>
    cartItem.itemId === cartItemToRemove.itemId
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
