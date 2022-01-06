import React, { useState } from 'react';
import AddTodoForm from '../../components/Todos/AddTodoForm';
import TodosList from '../../components/Todos/TodosList';

import styles from './Todos.module.css';

const getInitialTodos = () => [{id: 0, text: 'First Item'}]

const Todos = () => {
  const [todos, setTodos] = useState(getInitialTodos)

  const handleAddAdding = text => {
    setTodos((currentTodos) => 
    [
      ...currentTodos,
      {
        id:
          currentTodos.length > 0
          ? currentTodos[currentTodos.length - 1].id + 1
          : 0,
        text,
      },
    ])
  }

  const handleTodoDeleting = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    if(todoIndex === -1) return;
    setTodos([...todos.slice(0, todoIndex), ...todos.slice(todoIndex + 1)]);
  }

  const handleChangeTodo = (id, text) => {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    if (todoIndex === -1) return;
    setTodos([
      ...todos.slice(0, todoIndex),
      { ...todos[todoIndex], text: text },
      ...todos.slice(todoIndex + 1)
    ])
  }

  return(
    <div className={styles.container}>
      <AddTodoForm onAddTodo={handleAddAdding} />
      <TodosList 
        todos={todos} 
        onDelete={handleTodoDeleting}
        onChangeTodo={handleChangeTodo}
      />
      
    </div>
  )

}


export default Todos;