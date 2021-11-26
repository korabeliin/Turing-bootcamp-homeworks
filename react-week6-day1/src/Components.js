import React, {useState, useRef, Component, createRef} from 'react';
import './App.css';



const InputFunc = () => {

  const inputFuncRef = useRef()

  const handleClick = () => {
    inputFuncRef.current.focus()
  }

  const bluring = () => {
    if (inputFuncRef.current.value === 'Hello world!')
    inputFuncRef.current.blur()
  }

  return(
    <div className="focused-input-container">
      <h2>Functional Component</h2>
      <input ref={inputFuncRef} onChange={bluring} type="text" />
      <button onClick={handleClick}>Click me!</button>
      <h2>Class Component</h2>
      <InputClass />
    </div>
  );
}

class InputClass extends Component {

  constructor() {
    super();
    this.inputClass = createRef();
  }

  render(){

    const handleClick = () => {
      this.inputClass.current.focus();
    }

    const bluring = () => {
      if(this.inputClass.current.value === 'Hello world!') {
        this.inputClass.current.blur()
      }
    }

    return (
      <>
        <input ref={this.inputClass} onChange={bluring} type="text" />
        <button onClick={handleClick}>Click me too!</button>
      </>  
    );
  }
}

const Posts = () => {


  const calcSize = () => {

  }

  return (
    <div className="posts-container">
      <h2>Posts</h2>
      <div className="first-post" style={{height : '100px'}}>
        <p style={{fontSize : calcSize()}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, dolorum!</p>
      </div>
      <div className="second-post" style={{height : '200px'}}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam facilis, ipsa consequatur eligendi ratione!</p>
      </div>
      <div className="third-post" style={{height : '300px'}}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores aut nihil recusandae quia placeat sit ad facere delectus assumenda aliquam.</p>
      </div>
    </div>
  );
}






export default InputFunc;
export { Posts };