import classes from './HeaderCartButton.module.css';
import CartIcon from '../CartIcon';

const HeaderCartButton = function(props) {
    return (
        <>
            <button className={classes.button} onClick={props.onClick}>
                <span className={classes.icon}><CartIcon/></span>
                <span>Votre commande</span>
                <span className={classes.badge}>
                    0
                </span>
            </button>
        </>
    )
}

export default HeaderCartButton