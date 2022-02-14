import React, { useState, useEffect, useReducer, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input';


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

  const emailRef= useRef();
  const passwordRef= useRef();

  useEffect( () => {
    const validation = setTimeout( () => {
      //On utilie timeout parce qu'on a pas besoin de vérifier la validité à chaque fois

      setFormIsValid(
          password.isValid && email.isValid
        );  
      }, 400);

    //Cleanup function
    return () => clearTimeout(validation);

    }, [email.isValid, password.isValid] )

  const emailChangeHandler = (event) => dispatchEmail({ type : 'EMAIL_INPUT', value : event.target.value});
  const validateEmailHandler = () => dispatchEmail({ type : 'EMAIL_VALIDATION'});

  const passwordChangeHandler = (event) =>dispatchPassword({ type : 'PASSWORD_INPUT', value : event.target.value});
  const validatePasswordHandler = () => dispatchPassword({type : 'PASSWORD_VALIDATION'});

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) props.onLogin(email.value, password.value);
    else if (!email.isValid) emailRef.current.focus();
    else passwordRef.current.focus();
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input className={`${classes.control} ${email.isValid === false ? classes.invalid : ''}`}
          type="email" value={email.value} onChange={emailChangeHandler} onBlur={validateEmailHandler}
          ref={emailRef}/>
        <Input className={`${classes.control} ${password.isValid === false ? classes.invalid : ''}`}
          type="password" value={password.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler}
          ref={passwordRef}/>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
