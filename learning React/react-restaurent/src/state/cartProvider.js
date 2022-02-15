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
        }
        updatedAmount = state.totalAmount + action.item.price *Number(action.item.quantity)            
    } else if (action.type==="REMOVE") {
        const existingItemsIndex= state.items.findIndex(item=>item.id===action.id);
        const isItemExisting = state.items[existingItemsIndex];

        updatedAmount= state.totalAmount - isItemExisting.price;

        if (isItemExisting.quantity===1) {
            updatedCart= state.items.filter(item => item.id!==action.id);
        } else {
            const updatedItem = {...isItemExisting, quantity: isItemExisting.quantity -1};
            updatedCart = [...state.items];
            updatedCart[existingItemsIndex] = updatedItem;
        }

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