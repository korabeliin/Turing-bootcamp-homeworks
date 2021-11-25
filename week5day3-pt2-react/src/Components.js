import React, { useState, useRef } from 'react'
import './App.css';

const Textarea = () => {
 
  let [text, setText] = useState();

  const addTextToPar = (event) => {
    const newValue = event.target.value;
    setText(newValue)
  }

  return (
    <div className="textarea-container">
      <h2>Synchronization</h2>
      <textarea onChange={addTextToPar} name="textarea" id="areaText" cols="30" rows="10"></textarea>
      <p>{text}</p>
    </div>
  );
}

const SymbolsSum = () => {

  const inputEl = useRef();
  const inputFirst = useRef();
  const inputSec = useRef();

  const inputValCounter = () => {
    const inputVal = inputEl.current.value;
    alert(`Number of symbols: ${inputVal.length}`)
  }

  const inputsSum = () => {
    const firstInputNum = inputFirst.current.value;
    const secInputNum = inputSec.current.value;

    alert(`Result: ${+firstInputNum + +secInputNum}`)
  }
  
  return(
    <div className="symbols-sum-container">
      <h2>Summation</h2>
      <input ref={inputEl} type="text" placeholder="type a few symbols" />
      <button onClick={inputValCounter}>ALERT</button>
      <input ref={inputFirst} type="number" placeholder="first number" />
      <input ref={inputSec} type="number" placeholder="second number" />
      <button onClick={inputsSum}>Summation</button>
    </div>
  );
}


const Form = () => {
  
  const inputEl = useRef();

  const [lists, setLists] = useState([]);

  const addNewList = (event) => {
    event.preventDefault();
    const newList = event.target.list.value;

    setLists((lists) => [...lists, newList]);
    console.log(lists)
  }

  const deleteList = (event) => {
    event.preventDefault();
    const index = +inputEl.current.value;
    setLists(lists => [...lists.slice(0, index ), ...lists.slice(index + 1)]);
  }

  return(
    <div className="form-container">
      <h2>Lists</h2>
      <form onSubmit={addNewList} action="#">
        <ol>
          {Array.isArray(lists) && lists.map((list, index) => {
            return <li key={index}>{list}</li>
          })}
        </ol>
        <input type="text" name='list' />
        <button>Add new list</button>
      </form>
      <form onSubmit={deleteList} action="#">
        <input ref={inputEl} type="number" />
        <button>Delete list</button>
      </form>
    </div>
  );
}

const Authorization = () => {

  const [show, setShow] = useState(false)

  const logIn = useRef();
  const password = useRef();

  const validation = (event) => {
    event.preventDefault();
    if(logIn.current.value === 'user' && password.current.value === 'password') {
      if (show === true) {
        setShow(current => !current);
      }
      alert('Successfull authorization');
    } else {
        if(show === false){
          setShow(cur => !cur);
        }
    }
  }
    
  const [showSquare, setShowSquare] = useState(true);
  const [checkbox, setCheckbox] = useState(false)

  const handleClick = () => {
    if (checkbox === false) {
      setCheckbox(cur => !cur)
      if (showSquare === true) {
        setShowSquare(current => !current);
      }
    } else if (checkbox === true) {
      setCheckbox(cur => !cur)
      if (showSquare === false) {
        setShowSquare(current => !current);
      }
    }
  }

  return(

    <div className="auth-container">
      <h2>Authorization & Red Square</h2>
      <form onSubmit={validation}>
        <input ref={logIn} type="text" placeholder="login"/>
        <input ref={password} type="password" placeholder="password" required />
        <button>Send</button>
        <span style={{display: show ? 'block' : 'none'}}>Неправильные логин или пароль</span>
      </form>

      <input onClick={handleClick} type="checkbox" name="check" id="check" checkbox={ checkbox ? 'checked' : 'unchecked'} />
      <div className="square" style={{ display: showSquare ? 'block' : 'none' }}></div>
    </div>

  );
}

const Select = () => {

  const [size, setSize] = useState('16px')

  const changeHandle = (event) => {
    console.log(typeof(event.target.value))

    setSize(size => size = event.target.value)
  }

  const [options, setOptions] = useState([])
  const newOption = useRef()

  const addNewOption = (event) => {
    event.preventDefault();
    const newOptionValue = newOption.current.value;
    setOptions(options => [...options, newOptionValue]);
  }

  return(
    <div className="select-container">
      <h2>Selects</h2>
      <p style={{fontSize: size}}>Lorem ipsum dolor sit amet.</p>
      <select onChange={changeHandle} name="select" id="selectPar">
        <option>8px</option>
        <option>16px</option>
        <option>24px</option>
        <option>32px</option>
      </select>

      <form action="#" onSubmit={addNewOption}>
        <select name="select" id="select">
          {Array.isArray(options) && options.map(option => <option>{option}</option>)};
        </select>
        <input ref={newOption} type="text" />
        <button>Add new option</button>
      </form>
    </div>
  );
}

export default Textarea;
export { SymbolsSum, Form, Authorization, Select }


