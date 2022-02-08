import styles from './Error.modal.module.css';
import Card from './UI/Card';
import Button from './UI/Button';
import React, { useEffect, useState } from 'react';

const ErrorModal = function(props) {

    const [error, setError] = useState(props.error);

    useEffect( ()=> {
        setError(props.error);
    }, [props.error]);

    const dismiss= ()=> {
        console.log("test");
        setError('');
    }

    if (error==='empty' || error==='age') {
        return (
            <div className={styles.backdrop} onClick={dismiss}>
                <Card className={styles.modal}>
                    <div className={styles.header}>
                        <h2>Invalid Input</h2>
                    </div>
                        <div className={styles.content}>
                            {error==='empty' ? 'Veuillez entrer un age et nom valide' : 'Entrez un age valide (>0)'}
                        </div>
                        <footer className={styles.actions}>
                            <Button onClick={dismiss}>Annuler</Button>
                        </footer>
                </Card>
            </div>
        )
    }
    return (
        <Card></Card>
    )
}

export default ErrorModal;