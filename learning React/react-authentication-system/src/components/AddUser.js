import { useRef } from 'react';
import styles from './AddUser.module.css';
import Button from './UI/Button';
import Card from './UI/Card'; 

function AddUser(props) {

    const name = useRef();
    const age = useRef();

    
    const submitUser= function(event) {
        event.preventDefault();
        props.onNewUser({
            name :name.current.value,
            age: age.current.value,
            key : Math.random().toString()
        })
        name.current.value='';
        age.current.value='';
    }
    
    return (<Card className={styles.input}>
        <form onSubmit={submitUser}>
            <label>Username : </label>
            <input type='text' ref={name}></input>
            <label>Age (années) : </label>
            <input type='number' step='1' ref={age}></input>
            <Button>Ajouter un user</Button>
        </form>
    </Card>)
}


export default AddUser