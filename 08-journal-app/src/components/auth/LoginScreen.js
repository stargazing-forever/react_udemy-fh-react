import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import {  startGoogleLogin, startLoginEmailPassword } from '../../actions/authActions';
import validator from 'validator';

import useForm from '../../hooks/useForm'
import { removeError, setError } from '../../actions/uiActions';
import { useSelector } from 'react-redux';

const LoginScreen = () => {

  //hooks
  const {formValues, handleChange} = useForm({
    email: 'nando@gmail.com',
    password: '123456',
  });
  const {email, password} = formValues;
  const dispatch = useDispatch();
  const { msgError} = useSelector( state => state.ui );
  const { loading } = useSelector( state => state.ui );

  //functions
  const handleLogin = (e) => {
    e.preventDefault();
    if (isValidForm()){
      dispatch(startLoginEmailPassword(email, password));
    }
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  //validador
  const isValidForm = () => {
    if ( !validator.isEmail(email) ){
      dispatch(setError('Email is required'));
      return false;
    } else if ( validator.isEmpty(password) ) {
      dispatch(setError('Password is required'));
      return false;
    } else if ( password.length < 6 ){
      dispatch(setError('Password should be at least 6 characters'));
      return false;
    }
    dispatch(removeError());
    return true;
  }

  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form 
        onSubmit={handleLogin}
        className="animate__animated animate__fadeIn animate__faster"
      >
        {
          msgError === null || 
          (<div className="auth__alert-error">
            { msgError }
          </div>)
        }
        <input 
          type="text" 
          placeholder="email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleChange}
        />

        <input 
          type="password" 
          placeholder="Password"
          name="password"
          className="auth__input"
          autoComplete="off"
          value={password}
          onChange={handleChange}
        />

        <button 
          type="submit"
          className='btn btn-primary btn-block' 
          disabled={loading}
        >
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div 
            className="google-btn"
            onClick={handleGoogleLogin}
          >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link 
          to="/auth/register"
          className="link"
        > 
          Create new account
        </Link>

      </form>
    </>
  )
}

export default LoginScreen
