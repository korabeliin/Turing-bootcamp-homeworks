import React, { useState } from 'react';

import Button from '../../common/button/index';
import Input from '../../common/input/index';
import styles from '../TodoListItem/TodosListItem.module.css';

const TodosListItem = ( { text, id, onDelete, onChangeTodo } ) => {
  
  const [isEditable, setEditState] = useState(false);
  const [currentText, setCurrentText] = useState(text);

  const handleDeleteClick = () => {
    onDelete && onDelete(id);
  }

  const handleEditClick = () => {
    setEditState(true);
  } 

  const handleInputChange = (e) => {
    setCurrentText(e.target.value);
  }

  const handleSaveClick = () => {
    if(!currentText) return;
    setEditState(false);
    onChangeTodo(id, currentText)
  }

  const handleCancelClick = () => {
    setEditState(false);
    setCurrentText(text);
  }

  return (

    <li className={styles.todosListItem}>
      {isEditable ? 
      (
        <>
          <div className={styles.todosListItemTextWrapper}>
            <Input
              onChange={handleInputChange}
              value={currentText}
              variation='secondary'
              error={!currentText && 'Это поле не должно быть пустым'}
          />
          </div>
          <div className={styles.todosListItemButtonWrapper}>
            <Button 
              onClick={handleSaveClick}
              buttonText='Save'
              variation='secondary'
          />
          </div>
          <div className={styles.todosListItemButtonWrapper}>
            <Button 
              onClick={handleCancelClick}
              buttonText='Cancel'
              variation='secondary'
            />
          </div>
        </>
      ) : (
      <>
        <span className={styles.todosListItemTextWrapper}>{text}</span>
        <div className={styles.todosListItemButtonWrapper}>
          <Button 
            onClick={handleEditClick} 
            buttonText='Edit'  
            />
        </div>

        <div className={styles.todosListItemButtonWrapper}>
          <Button 
            onClick={handleDeleteClick} 
            buttonText='Delete'  
          />
        </div>
    </>

      )}
    </li>


    // <div className='tasks-list__list-item'>
    //   <li>{text}</li>
    //   <button onClick={handleDeleteClick}>Delete</button>
    // </div>
  );
}

export default TodosListItem;