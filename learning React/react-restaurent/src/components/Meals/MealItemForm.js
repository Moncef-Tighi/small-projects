import classes from './MealItemForm.module.css';
import Input from '../UI/Input';

const MealItemForm = function() {
    return(
        <form className={classes.form}>
            <Input label='Quantité'/>
            <button>+ Ajouter</button>
        </form>
    )
}

export default MealItemForm