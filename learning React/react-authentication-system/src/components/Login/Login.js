import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


const emailReducer = function(state, action) {
  if (action.type==='EMAIL_INPUT') return {value : action.value, isValid : action.value.includes('@')}
  if (action.type==='EMAIL_VALIDATION') return {value : state.value, isValid : state.value.includes('@')}
  
  return {value : '', isValid: true};
}

const passwordReducer = function(state, action) {

  if (action.type==='PASSWORD_INPUT') return {value : action.value, isValid : action.value.trim().length > 6}
  if (action.type==='PASSWORD_VALIDATION') return {value : state.value, isValid : state.value.trim().length > 6}
  return {value : '', isValid: true}
}

const Login = (props) => {

  const [formIsValid, setFormIsValid] = useState(false);

  const [email, dispatchEmail] = useReducer(emailReducer, {value : '', isValid: true});
  const [password, dispatchPassword] = useReducer(passwordReducer, {value : '', isValid: true});

  useEffect( () => {
      setFormIsValid(
        email.value.includes('@') && password.value.trim().length > 6
      );  
    }, [email.value, password.value] )

  const emailChangeHandler = (event) => dispatchEmail({ type : 'EMAIL_INPUT', value : event.target.value});
  const validateEmailHandler = () => dispatchEmail({ type : 'EMAIL_VALIDATION'});

  const passwordChangeHandler = (event) =>dispatchPassword({ type : 'PASSWORD_INPUT', value : event.target.value});
  const validatePasswordHandler = () => dispatchPassword({type : 'PASSWORD_VALIDATION'});

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(email.value, password.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            email.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email" id="email" value={email.value} onChange={emailChangeHandler} onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            password.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password" id="password" value={password.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
