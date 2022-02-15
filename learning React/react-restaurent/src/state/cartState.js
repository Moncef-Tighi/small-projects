import React from 'react';


const CartState =React.createContext({
    items: [],
    totalAmount : 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartState;  