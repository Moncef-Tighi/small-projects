import CartState from "./cartState";

const CartProvider = function(props) {
    const addToCart = function(item) {

    }
    const removeFromCart = function(id) {
         
    }
    const cart = {
        items: [],
        totalAmount: 0,
        addItem: addToCart,
        removeItem: removeFromCart,
    }
    return (<CartState.Provider value={cart}>{props.children}</CartState.Provider>)
}

export default CartProvider;