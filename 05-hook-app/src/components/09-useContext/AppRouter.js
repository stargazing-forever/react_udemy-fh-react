import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { DefaultComponent } from './DefaultComponent';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <div className="container">
          <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/notfound" component={DefaultComponent} />

            <Redirect to="/notfound" />
            {/* <Route component={DefaultComponent}/>  */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};
