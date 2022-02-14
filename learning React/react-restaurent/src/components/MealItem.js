import classes from './MealItem.module.css';

const MealItem= function(props) {


    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>{props.price}</p>
            </div>
        </li>
    )
}

export default MealItem