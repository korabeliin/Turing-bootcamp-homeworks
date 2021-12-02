import React from 'react';
import PropTypes from 'prop-types';

const Button = ({type, onClick}) => {
  return (
    <>
      <button type={type} onClick={onClick}>Just Button</button>
    </>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;