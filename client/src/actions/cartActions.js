export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {

    var cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        varient: varient,
        quantity: Number(quantity),
        prices: pizza.prices,
        price: pizza.prices[0][varient] * quantity,
    }
    if (cartItem.quantity > 10) {
        alert('u cannot add more than 10 quantities')
    } else {
        if (cartItem.quantity < 1) {
            dispatch({ type: 'DELETE_FROM_CART', payload: pizza })
        }
        else {
            dispatch({ type: 'ADD_TO_CART', payload: cartItem })

        }

    }
    /*getState() is likely a method that retrieves the current state of the application, and cartReducer.
    cartItems is likely a property within that state that holds an array of items that are currently in a cart.*/
    const cartItems = getState().cartReducer.cartItems
    //update local storage
    //localStorage.setItem method is used to store the data locally in the browser. 
    // convert the javascript object into a json string
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const deleteFromCart = (pizza) => (dispatch, getState) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: pizza })
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}

export const clearCart = () => {
    return {
      type: 'CART_CLEAR',
    };
  };