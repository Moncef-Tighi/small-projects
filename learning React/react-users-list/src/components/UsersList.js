import Card from './UI/Card';
import styles from './UsersList.module.css';

const UsersList = function(props) {
    return (
        <Card className={props.userList.length>0 ? styles.users : ''}>
            <ul>
                {props.userList.map( user=> {
                    return (<li key={user.key}>{user.name} ({user.age} years old)</li>)
                } )}
            </ul>
        </Card>
    )    
}

export default UsersList