import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import {firebase} from '../firebase/firebase-config';

import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { startLoadingNotes } from '../actions/notesActions';

const AppRouter = () => {

  const dispatch = useDispatch();

  const [cheking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged( (user) => {
      //si no esta autenticado devuelve null
      if( user?.uid ){
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn( true );
        dispatch(startLoadingNotes( user.uid ));
      } else {
        setIsLoggedIn( false );
      }
      setCheking( false );
    })
  }, [dispatch]);

  if(cheking) {
    return <h1>Espere...</h1>
  }

  return (
    <Router>
        <div>
          <Switch>
            <PublicRoute 
              path="/auth" 
              component={AuthRouter} 
              isAuth={isLoggedIn} 
            />
            <PrivateRoute 
              exact 
              path="/" 
              component={JournalScreen} 
              isAuth={isLoggedIn} 
            />
            <Redirect to="/auth/login" />

          </Switch>
        </div>
      </Router> 
    
  )
}

export default AppRouter