import classes from './HeaderCartButton.module.css';
import CartIcon from '../CartIcon';
import { useContext } from 'react';
import CartState from '../../state/cartState';


const HeaderCartButton = function(props) {
    const data = useContext(CartState);
    return (
        <>
            <button className={classes.button} onClick={props.onClick}>
                <span className={classes.icon}><CartIcon/></span>
                <span>Votre commande</span>
                <span className={classes.badge}>
                    {data.items.length}
                </span>
            </button>
        </>
    )
}

export default HeaderCartButton