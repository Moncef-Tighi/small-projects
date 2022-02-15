import classes from './Cart.module.css';
import Modal from './Modal';
import { useContext } from 'react';
import CartState from '../../state/cartState';
import CartItem from './CartItem';

const Cart = function(props) {
    const state = useContext(CartState);
    const cartItemRemove = id => {

    }
    const cartItemAdd = item => {

    }
    const items = state.items.map( (item)=>  {
        return (
        <CartItem key={item.id} name={item.name} amount={item.quantity} 
        price={item.price} onRemove={cartItemRemove.bind(null, item.id)} onAdd={cartItemAdd.bind(null,item)}/>
        )
    }) 
    const hasItems = items.length>0;
    return (
        <Modal className={props.className} onClick={props.onHideCart}>
            <ul className={classes['cart-items']}>
                {hasItems || <li>Votre panier est pour l'instant vide !</li>}
                {items}
            </ul>
            <div className={classes.total}>
                <span>Prix total</span>
                <span>{state.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onHideCart}>Fermer</button>
                {hasItems && <button className={classes.button}>Commander</button>}
            </div>
        </Modal>
    )
}

export default Cart;