export const addItemTocart = (cartItems, cartItemToAdd) => {
    const exisingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (exisingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem)
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}