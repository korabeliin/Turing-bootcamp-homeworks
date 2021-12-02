import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';


class Link extends Component {
  render() {
    const { text, href } = this.props;
    const link = createRef()

    return (
      <>
        <a ref={link} href={href}>{text}</a>
      </>
    );
  }
}


Link.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  isUnderlined: PropTypes.bool
}


export default Link;