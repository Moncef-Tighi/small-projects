import CartState from "./cartState";
import { useReducer } from 'react';

const defaultCart= {
    items: [],
    totalAmount : 0
}

const cartReducer= function(state, action) {
    let updatedCart;
    let updatedAmount = state.amount
    if (action.type==="ADD") {
        const existingItemsIndex= state.items.findIndex(item=>item.id===action.item.id);
        const isItemExisting = state.items[existingItemsIndex];

        if (isItemExisting) {

            const updatedItem = {
                ...isItemExisting,
                quantity : Number(isItemExisting.quantity)+ Number(action.item.quantity)
            } 

            updatedCart= [...state.items];
            updatedCart[existingItemsIndex] = updatedItem;
        }
        else {
            updatedCart = state.items.concat(action.item);
            updatedAmount = state.totalAmount + action.item.price *Number(action.item.quantity)    
        }
        
    } else if (action.type==="REMOVE") {
        updatedCart= state.items.splice(action.id);
        updatedAmount-= state.items[action.id].price * state.items[action.id].amount;
    }
    return {
        items : updatedCart,
        totalAmount : updatedAmount
    }
}

const CartProvider = function(props) {
    const [cartState, updateCart]= useReducer(cartReducer, defaultCart);
    const addToCart = function(item) {
        updateCart({type : "ADD", item,});
    }
    const removeFromCart = function(id) {
        updateCart({type : "REMOVE", id,});
    }

    const cart = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addToCart,
        removeItem: removeFromCart,
    }
    return (<CartState.Provider value={cart}>{props.children}</CartState.Provider>)
}

export default CartProvider;