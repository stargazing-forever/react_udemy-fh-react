import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route 
      { ...rest }
      component={ props => (
        !isAuthenticated
          ? <Component { ...props } />
          : <Redirect to="/" />
      )}
    />
  )
}

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
}

