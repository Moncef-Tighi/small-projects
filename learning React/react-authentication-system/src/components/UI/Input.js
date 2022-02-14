import { useImperativeHandle, useRef } from "react"
import React from 'react';

const Input= React.forwardRef(function(props, ref) {
    const inputRef= useRef();

    const activate = () => {
        inputRef.current.focus();
    }
    useImperativeHandle(ref, ()=> {
        return {
            focus : activate
        }
    } )
    return (
        <div className={props.className}>
            <label htmlFor={props.type}>{props.type}</label>
            <input
            type={props.type} id={props.type} value={props.value} onChange={props.onChange} onBlur={props.onBlur}
            ref={inputRef}
            />
        </div>
    )
});

export default Input