import styles from './Error.modal.module.css';
import Card from './UI/Card';
import Button from './UI/Button';
import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';


const Backdrop = function(props) {
    return <div className={styles.backdrop} onClick={props.onClick}>{props.children}</div>
}

const Modal = function(props) {
    return (
        <Card className={styles.modal}>
            <div className={styles.header}>
                <h2>Invalid Input</h2>
            </div>
            <div className={styles.content}>
                {props.error==='empty' ? 'Veuillez entrer un age et nom valide' : 'Entrez un age valide (>0)'}
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onClick}>Annuler</Button>
            </footer>
        </Card>

        )

}

const ErrorModal = function(props) {

    const [error, setError] = useState(props.error);

    useEffect( ()=> {
        setError(props.error);
    }, [error]);

    const dismiss= ()=> {
        console.log("test");
        setError('');
    }

    if (error==='empty' || error==='age') {
        return (
            <>
                {ReactDOM.createPortal(<Backdrop onClick={dismiss}/>, document.querySelector("#backdrop") )}
                {ReactDOM.createPortal(<Modal onClick={dismiss} error={error}/>, document.querySelector("#overlay") )}
            </>
        )
    }
    return (
        <></>
    )
}

export default ErrorModal;