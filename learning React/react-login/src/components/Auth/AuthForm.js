import { useState } from 'react';
import { useContext, useRef } from 'react/cjs/react.production.min';
import AuthContext from '../store/authContext';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const email = useRef();
  const password = useRef();
  const authContext = useContext(AuthContext);

  const submitHandeler = async event => {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = email.current.value;

    //TODO : Add validation
    if (isLogin) {
      
    } else {
      setLoading(true);
      const response = await fetch("login_API_EndPoint", {
        method: "POST",
        headers : {
          'Content-Type' : "application/json"
        },
        body: JSON.stringify({
          email : enteredEmail,
          password : enteredPassword,
          returnSecureToken : true
        })
      });
      setLoading(false);
      if (!response.ok) throw response.error;
      authContext.login(response.token);
    }

  }
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={classes.auth}>
      <h2>{loading ? "Chargement en cours..." : ""}</h2>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandeler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={email} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={password} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
