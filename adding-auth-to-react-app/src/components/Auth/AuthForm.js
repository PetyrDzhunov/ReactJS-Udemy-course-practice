import { useContext } from 'react';
import { useRef, useState } from 'react';
import AuthContext from '../../store/auth-context';

import { useHistory } from 'react-router-dom';

import classes from './AuthForm.module.css';
const API_KEY = 'AIzaSyB6CQIjIKARZ5p4w3MtYJeWh5PpSZJDTLg';

const AuthForm = () => {
  const history = useHistory();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  let [isLoading, setIsLoading] = useState(false);

  const ctx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //optional : Add validaton
    setIsLoading(true);
    let url;
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    };
    const body = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true
    };
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then(data => {
          let errorMessage = 'Authentication failed!';
          //show error modal
          // const errorMessage = data?.error.message;
          // alert(errorMessage);
          setIsLoading(false);
          alert(errorMessage);
          throw new Error(errorMessage);
        });
      }
    }).then(data => {
      setIsLoading(false);
      const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
      ctx.login(data.idToken, expirationTime.toString());
      history.replace('/');
    }).catch(err => alert(err.message));

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
