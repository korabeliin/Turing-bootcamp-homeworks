import React, { useState, useRef} from "react";
import './App.css';
import SecondList from "./SecondList";

const List = () => {

  const alertClick = (text) => {
    alert(text);
  }

  return (
    <div className="list-container">
      <ul>
        <li key={1}>One <button onClick={() => alertClick('One') }>ALERT</button></li>
        <li key={2}>Two <button onClick={() => alertClick('Two') }>ALERT</button></li>
        <li key={3}>Three <button onClick={() => alertClick('Three') }>ALERT</button></li>
        <li key={4}>Four <button onClick={() => alertClick('Four') }>ALERT</button></li>
      </ul>
      <SecondList />
    </div>
  );
}

export default List;