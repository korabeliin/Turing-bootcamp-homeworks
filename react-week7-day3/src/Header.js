import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Header extends Component {
  render() {
    const text = this.props.text;
    const color = this.props.color;

    return (
      <>
        <h1 style={{color}}>{text}</h1>
      </>
    );
  }
}



Header.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

export default Header;