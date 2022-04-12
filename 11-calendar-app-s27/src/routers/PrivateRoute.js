import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route 
      { ...rest }
      component={ props => (
        isAuthenticated
          ? <Component { ...props } />
          : <Redirect to="/login" />
      )}
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
}

