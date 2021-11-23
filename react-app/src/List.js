import React from "react";
import './App.css';
import ListItem from "./ListItem";


const List = () => {

  const [tasks, setTask] = React.useState([]);

  const addNewTask = (event) => {
    event.preventDefault();
    const newTask = event.target.task.value;

    setTask((tasks) => [...tasks, newTask])
  }


  const taskDelete = (index) => {
    setTask(tasks => [...tasks.slice(0, index), ...tasks.slice(index + 1)]);
  }


  return (
    <div className="container">
      <form onSubmit={addNewTask} className="add-task-form">
        <input type="text" name="task" className="add-task-form__task-input"></input>
        <button className="add-task-submit-button">Click Me</button>
      </form>

      <h3 className="task-list__header">Task List</h3>

      <ul className="task-list_list">
        {Array.isArray(tasks) && tasks.map((task, index) => <ListItem onDelete={taskDelete} index={index} key={index} task={task} />)}
      </ul>
    </div>
  )
}

export default List;