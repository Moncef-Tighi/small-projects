import React from 'react';


const CartState =React.createContext({
    cart: [{
        name : "",
        price : 0,
        quantity : ""
    }],
});

export default CartState;  