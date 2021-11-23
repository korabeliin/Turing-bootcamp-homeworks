import React, {useState} from "react";
import './App.css';
import ListItem from "./ListItem";


const SecondList = () => {

  const [lists, setLists] = useState([]);
  const [listsEnd, setListsEnd] = useState([]);
  const [listsMid, setListsMid] = useState([]);

  const addNewList = (event) => {
    event.preventDefault();
    const newList = prompt();
    setLists((lists) => [...lists, newList]);
  }

  const addInTheEnd = (event) => {
    event.preventDefault();
    const newList = prompt();
    setListsEnd((listsEnd) => [...listsEnd, newList]);
  }

  const addToMid = (event) => {
    event.preventDefault();
    const newList = prompt();
    setListsMid((listsMid) => [...listsMid, newList]);
  }

  const deleteList = (index) => {
    setLists(lists => [...lists.slice(0, index)]);
  }
  const deleteEndList = (index) => {
    setListsEnd(listsEnd => [...listsEnd.slice(0, index)]);
  }
  const deleteMidList = (index) => {
    setListsMid(listsMid => [...listsMid.slice(0, index)]);
  }

  return (
    <div className="list-container-two">
      <ul>
        {Array.isArray(lists) && lists.map((list, index) => <ListItem onDelete={deleteList} key={index} listText={list} />)}
        <li key={5}>One</li>
        <li key={6}>Two </li>
        {Array.isArray(listsMid) && listsMid.map((list, index) => <ListItem onDelete={deleteMidList} key={index} listText={list} />)}
        <li key={7}>Three </li>
        <li key={8}>Four </li>
        {Array.isArray(listsEnd) && listsEnd.map((list, index) => <ListItem onDelete={deleteEndList} key={index} listText={list} />)}
      </ul>
      <button onClick={addNewList}>add BEGINNING</button>
      <button onClick={deleteList}>Del BEGINNING</button>
      <button onClick={addInTheEnd}>add END</button>
      <button onClick={deleteEndList}>Del END</button>
      <button onClick={addToMid}>add MIDDLE</button>
      <button onClick={deleteMidList}>Del MIDDLE</button>
    </div>
  )
}

export default SecondList;