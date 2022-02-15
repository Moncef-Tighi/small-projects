import classes from './Cart.module.css';
import Modal from './Modal';
const Cart = function(props) {
    const DUMMYcartItems = [{id: 'c1', name : 'Sushi', amount: 2, price : 12.99}]
        .map( (item)=> <li>{item.name}</li>) 
    return (
        <Modal className={props.className} onClick={props.onHideCart}>
            <ul className={classes['cart-items']}>
                {DUMMYcartItems}
            </ul>
            <div className={classes.total}>
                <span>Prix total</span>
                <span>35.69</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onHideCart}>Fermer</button>
                <button className={classes.button}>Commander</button>
            </div>
        </Modal>
    )
}

export default Cart;