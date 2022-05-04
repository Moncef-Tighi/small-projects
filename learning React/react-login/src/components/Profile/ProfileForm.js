import classes from './ProfileForm.module.css';
import { useRef } from 'react';
import { useContext } from 'react';
import AuthContext from '../../store/authContext';

const ProfileForm = () => {
  const passwordInput = useRef();
  const {token}= useContext(AuthContext);

  const submitHandeler = (event) => {
    event.preventDefault();

    const password = passwordInput.current.value;

    fetch('endpoint-api', {
      method : "POST",
      headers : {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      },
      body : {
        password,
        returnSecureToken : true
      }
    })
  }
  return (
    <form className={classes.form} onSubmit={submitHandeler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='3' ref={passwordInput} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
