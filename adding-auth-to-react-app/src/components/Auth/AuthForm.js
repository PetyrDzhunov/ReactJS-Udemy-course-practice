import { useRef, useState } from 'react';

import classes from './AuthForm.module.css';
const API_KEY = 'AIzaSyB6CQIjIKARZ5p4w3MtYJeWh5PpSZJDTLg';

const AuthForm = () => {
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  let [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //optional : Add validaton
    setIsLoading(true);
    if (isLogin) {

    } else {
      const body = {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      };
      fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(res => {
        if (res.ok) {

        } else {
          return res.json().then(data => {
            //show error modal
            // const errorMessage = data?.error.message;
            // alert(errorMessage);
            setIsLoading(false);
            alert('Authentication failed!');
          });
        }
      }).catch(err => console.log(err));
    };

  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref={emailInputRef} type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input ref={passwordInputRef} type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
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
