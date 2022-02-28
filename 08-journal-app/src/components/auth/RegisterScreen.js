import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/authActions';
import { removeError, setError } from '../../actions/uiActions';

import useForm from '../../hooks/useForm';

const RegisterScreen = () => {

  const initialForm = {
    name: 'Hernando',
    email: 'nando@gmail.com',
    password: '123456',
    password2: '123456'
  };

  // hooks
  const dispatch = useDispatch();
  const { msgError } = useSelector( state => state.ui );

  const {formValues, handleChange} = useForm(initialForm);
  const {name, email, password, password2} = formValues;

  // functions 
  const handleRegister = (e) => {
    e.preventDefault();
    if( isFormValid() ) {
      dispatch(startRegisterWithEmailPasswordName( email, password, name));
    }
  }

  const isFormValid = () => {
    if (validator.isEmpty(name)){
      dispatch(setError('Name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      return false;
      
    } else if (!validator.equals(password, password2) || password.length < 6) {
      dispatch(setError('Password should be at least 6 characters and match each other'));
      return false;
    }
    dispatch(removeError());
    return true;
  }


  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form 
        onSubmit={handleRegister}
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
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />

        <input 
          type="text" 
          placeholder="Email"
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

        <input 
          type="password" 
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          autoComplete="off"
          value={password2}
          onChange={handleChange}
        />

        <button 
          type="submit"
          className='btn btn-primary btn-block mb-5' 
        >
          Login
        </button>

        

        <Link 
          to="/auth/login"
          className="link"
        > 
          Already registered?
        </Link>

      </form>
    </>
  )
}

export default RegisterScreen
