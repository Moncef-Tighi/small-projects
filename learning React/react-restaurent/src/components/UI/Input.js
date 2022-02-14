import { useRef } from 'react';
import classes from './Input.module.css';

const Input = function(props) {
    const input = useRef();
    props.onSubmit(input);    
    return (
    <div className={classes.input}>
        <label>{props.label}</label>
        <input type='number' min={1} ref={input}></input>
    </div>)
}

export default Input;