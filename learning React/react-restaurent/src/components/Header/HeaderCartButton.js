import classes from './HeaderCartButton.module.css';
import CartIcon from '../CartIcon';

const HeaderCartButton = function(props) {
    return (
        <button className={classes.button}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Votre commande</span>
            <span className={classes.badge}>
                0
            </span>
        </button>
    )
}

export default HeaderCartButton