import styles from './AddUser.module.css';
import Button from './UI/Button';
 
function AddUser() {
    
    
    return (<div>
        <form>
            <div className={styles.input}>
                <label>Username : </label>
                <input type='text'></input>
            </div>
            <div className={styles.input}>
                <label>Age (années) : </label>
                <input type='number' step='1'></input>
            </div>
            <Button>Ajouter un user</Button>
        </form>
    </div>)
}


export default AddUser