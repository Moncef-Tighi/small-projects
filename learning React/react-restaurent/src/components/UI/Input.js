import classes from './Input.module.css';

const Input = function(props) {
    return (
    <div className={classes.input}>
        <label>{props.label}</label>
        <input type='number' min={1}></input>
    </div>)
}

export default Input;