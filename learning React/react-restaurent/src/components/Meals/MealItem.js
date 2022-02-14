import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartState from '../../state/cartState';

const MealItem= function(props) {
    const context = useContext(CartState);

    const submit= function(value) {
        context.addToCart({
            name : props.name,
            price : props.value,
            quantity : value    
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>${props.price}</p>
            </div>
            <MealItemForm onSubmit={submit}/>
        </li>
    )
}

export default MealItem