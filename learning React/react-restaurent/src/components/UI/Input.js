import { useRef } from 'react';
import classes from './Input.module.css';

const Input = function(props) {
    const input = useRef();
    props.onSubmit(input);    
    return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={input} {...props.input}></input>
    </div>)
}

export default Input;