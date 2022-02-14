import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartState from '../../state/cartState';

const MealItem= function(props) {
    const {context, updateContext} = useContext(CartState);
    console.log(context);
    const submit= function(input) {
        updateContext({
            name : props.name,
            price : props.price,
            quantity : input.value    
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