import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem= function(props) {


    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>${props.price}</p>
            </div>
            <MealItemForm/>
        </li>
    )
}

export default MealItem