import classes from './MealItemForm.module.css';
import Input from '../UI/Input';
import { useRef } from 'react';

const MealItemForm = function(props) {

    const amount= useRef();
    const submitForm = function(event) {
        event.preventDefault();
        const currentAmount = Number(amount.current.value);
        if (currentAmount<1) return
        props.onAddToCart(amount);
    }
    
    return(
        <form className={classes.form} onSubmit={submitForm}>
            <Input label='Quantité' onSubmit={submitForm} ref={amount} input={{
                id: 'amount',
                type : 'number',
                min : '1',
                step: '1',
                defaultValue: '1'
            }}/>
            <button>+ Ajouter</button>
        </form>
    )
}

export default MealItemForm