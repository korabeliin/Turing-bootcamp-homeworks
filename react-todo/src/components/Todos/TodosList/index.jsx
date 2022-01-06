import React from 'react';

import TodosListItem from '../TodoListItem';
import styles from './TodosList.module.css'

const TodosList = ( { todos, onDelete, onChangeTodo } ) => {
  return (
    <ul className={styles.todosList}>
      {todos.map(todo => (
        <TodosListItem 
          key={todo.id}
          text={todo.text}
          id={todo.id}
          onDelete={onDelete}
          onChangeTodo={onChangeTodo}

        />
      ))}
    </ul>
  );
}

export default TodosList;
