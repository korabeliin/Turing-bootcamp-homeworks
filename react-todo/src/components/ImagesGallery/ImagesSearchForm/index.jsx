import React, { useState } from 'react';

import Input from '../../common/input';
import Button from '../../common/button';
import styles from './ImagesSearchForm.module.css'

const ImagesSearchForm = ({onSubmit, imageName}) => {

  const [inputValue, setInputValue] = useState(imageName)

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.imageName.value);
  }

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <form className={styles.imagesSearchForm} onSubmit={handleSubmit}>
      <Input 
        name='imageName' 
        value={inputValue} 
        onChange={handleChangeInput}
      />
      <Button buttonText='Search' type='submit' />
    </form>
  );
};

export default ImagesSearchForm;