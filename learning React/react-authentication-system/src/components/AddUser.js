import { useState } from 'react';
import styles from './AddUser.module.css';
import Button from './UI/Button';
import Card from './UI/Card'; 

function AddUser(props) {
    const [user, setUserInfo]=useState({
        name : '',
        age : 0
    });

    const updateName= function(event) {
        setUserInfo({
            ...user,
            name: event.target.value,
        })
    }
    const updateAge= function(event) {
        setUserInfo({
            ...user,
            age: Number(event.target.value),
        })
    }
    
    const submitUser= function(event) {
        event.preventDefault();
        props.onNewUser({...user, key : Math.random().toString()});
        setUserInfo({
            name : '',
            age : 0
        })
    }
    
    return (<Card className={styles.input}>
        <form onSubmit={submitUser}>
            <label>Username : </label>
            <input type='text' onChange={updateName} value={user.name}></input>
            <label>Age (années) : </label>
            <input type='number' step='1' onChange={updateAge} value={user.age}></input>
            <Button>Ajouter un user</Button>
        </form>
    </Card>)
}


export default AddUser