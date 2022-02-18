import React from 'react';
import PropTypes from 'prop-types';

const App = ({ nombre }) => {

  return (
    <>
      <h1> { nombre }!</h1>
      <h2> You're the best for me!</h2>
    </>
  )

}

App.propTypes = {
  nombre: PropTypes.string.isRequired,
};

App.defaultProps = {
  nombre: 'Unnamed',
}

export default App;