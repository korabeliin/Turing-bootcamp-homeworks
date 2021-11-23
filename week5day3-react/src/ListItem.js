import React, { Fragment } from "react";
import './App.css'


const ListItem = ({listText, index, onDelete}) => {

  return (
    <Fragment>
      <li key={index}>{listText}</li>
    </Fragment>
  );
}


export default ListItem;