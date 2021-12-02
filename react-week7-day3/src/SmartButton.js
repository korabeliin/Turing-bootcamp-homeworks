import React from 'react';
import PropTypes from 'prop-types';




const SmartButton = ({ isButton }) => {

  return(
    <>
      {isButton}
    </>
  );
}


SmartButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  href: PropTypes.string,
  isUnderlined: PropTypes.bool,
  isButton: PropTypes.object
}




export default SmartButton;