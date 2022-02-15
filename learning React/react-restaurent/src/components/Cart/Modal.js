import classes from './Modal.module.css';
import reactDom from 'react-dom';
import { Fragment } from 'react';

const Modal = function(props) {
    const Modal = reactDom.createPortal(<div className={`${classes.modal} ${props.className}`}>{props.children}</div>, document.querySelector("#modal")) 
    const backdrop = reactDom.createPortal(<div className={`${classes.backdrop} ${props.className}`}></div>, document.querySelector("#backdrop"));

    return (
        <Fragment>
            <div>{Modal}</div> 
            <div onClick={props.onClick}>{backdrop}</div>
        </Fragment>
    )
}

export default Modal