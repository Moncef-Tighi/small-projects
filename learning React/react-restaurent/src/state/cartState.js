import React, { useContext } from 'react';


const CartState =React.createContext({

    cart: [{
        name : "",
        price : 0,
        quantity : ""
    }],
    addToCart: ()=>{} //la fonction est défini dans le Provider et non pas par défaut
});

export const CartStateProvider = function(props) {
    const {cart, updateCart} = useContext(CartState);
    const addToCart = function() {
        console.log(cart);
        updateCart(props.value);
        console.log(cart);    
    }
    return (
        <CartState.Provider value={{addToCart,}}>{props.children}</CartState.Provider>
    )
}

export default CartState;  