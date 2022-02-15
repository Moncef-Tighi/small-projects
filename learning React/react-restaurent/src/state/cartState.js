import React from 'react';


const CartState =React.createContext({
    cart: [],
    totalAmount : 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartState;  