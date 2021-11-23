import React from "react";
import './App.css';


const ListItem = ({ task, index, onDelete}) => {

  const DeleteClick = () => {
    if(!(onDelete && index >= 0)) return;
    onDelete(index);
  }

  return (
    <div className="task-list__list-item">
      <li className="task-list__list-item" key={index}>{task}</li>
      <button onClick={DeleteClick}>Delete</button>
    </div>

  )
}







export default ListItem;