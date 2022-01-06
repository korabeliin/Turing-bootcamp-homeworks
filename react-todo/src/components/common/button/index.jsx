import React, { useMemo } from "react";

import styles from './Button.module.css'

const Button = ({variation, buttonText, ...props}) => {
  const className = useMemo( () => {
    switch(variation) {
      case 'secondary':
        return styles.secondaryButton;
      case 'primary':
      default:
        return styles.primaryButton;
    }
  }, [variation])

  return (
  <button 
    className={className} 
    {...props}>
    {buttonText}
  </button>
  )
}


export default Button;