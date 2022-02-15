import classes from './HeaderCartButton.module.css';
import CartIcon from '../CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartState from '../../state/cartState';


const HeaderCartButton = function(props) {
    const data = useContext(CartState);
    const [buttonAnimation, setButtonAnimation]= useState(false);
    const animationClasses = `${classes.button} ${buttonAnimation ? classes.bump : ''}`
    useEffect(()=>{
        if (data.items.length) setButtonAnimation(true);
        return setTimeout( ()=> {
            setButtonAnimation(false);
        }, 300 )
    }, [data.items])
    return (
        <>
            <button className={animationClasses} onClick={props.onClick}>
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