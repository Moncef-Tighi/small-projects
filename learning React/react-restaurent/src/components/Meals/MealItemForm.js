import classes from './MealItemForm.module.css';
import Input from '../UI/Input';
import { useState } from 'react';

const MealItemForm = function(props) {
    const [quantity, updateQuantity] = useState(0);
    const getValue = (input) => updateQuantity(input.current);

    const submitForm = function(event) {
        event.preventDefault();
        props.onSubmit(quantity);
    }
    return(
        <form className={classes.form} onSubmit={submitForm}>
            <Input label='Quantité' onSubmit={getValue}/>
            <button>+ Ajouter</button>
        </form>
    )
}

export default MealItemForm