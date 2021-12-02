import React from 'react';
import PropTypes from 'prop-types';

const Image = ({src, width, height, alt}) => {
  return(
    <img src={src} alt={alt} style={{ width: `${width}px`, height: `${height}px` }} />
  );
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default Image;