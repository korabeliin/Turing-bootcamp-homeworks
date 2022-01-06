import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {connect} from "react-redux";

import { ADD_BOOK, REMOVE_BOOK } from '../../redux/slices/booksSlice';
import {ADD_USER, REMOVE_USER} from "../../redux/slices/readersSlice";
import './Library.css'

const Library = ({readers}) => {
  const dispatch = useDispatch();
  const booksStorage = useSelector(state => state.books);
  // const readersStorage = useSelector(state => state.readers);

  // Описываем переменные состояния для формы добавления книги
  const [bookId, setBookId] = useState(0);
  const [bookName, setBookName] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookYear, setBookYear] = useState(0);
  const [bookQuantity, setBookQuantity] = useState(0);
  const [bookRate, setBookRate] = useState(0);

  // Описываем переменные состояния для формы добавления пользователя
  const [userId, setUserId] = useState(0)
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');

  // Затем описываем обработчики событий для формы книги
  const onChangeBookName = (e) => { setBookName(e.target.value) }
  const onChangeBookAuthor = (e) => { setBookAuthor(e.target.value)}
  const onChangeBookYear = (e) => {setBookYear(e.target.value)}
  const onChangeBookQuantity = (e) => {setBookQuantity(e.target.value)}
  const onChangeBookRate = (e) => {setBookRate(e.target.value)}
  const onChangeBookId = e => {setBookId(e.target.value)}

  // И обработчики событий для формы пользователей
  const onChangeUserName = (e) => {setUserName(e.target.value)}
  const onChangeUserSurname = (e) => {setUserSurname(e.target.value)}
  const onChangeUserId = e => {setUserId(e.target.value)}

  const handleAddingNewBook = e => {
    e.preventDefault();
    dispatch(ADD_BOOK(
        {
          name: bookName,
          author: bookAuthor,
          year: bookYear,
          quantity: bookQuantity,
          rate: bookRate }
    ))};

  const handleRemovingBook = e => {
    e.preventDefault();
    dispatch(REMOVE_BOOK(
        {
          id: +bookId,
        }
    ))};

  const handleAddingNewUser = e => {
    e.preventDefault();
    dispatch(ADD_USER(
        {
          name: userName,
          surname: userSurname
        }
    ))};

  const handleRemovingUser = e => {
    e.preventDefault();
    dispatch(REMOVE_USER(
        {
          id: +userId
        }
    ))};

  return (
    <section className='library'>
      <div className='forms-container'>
        <div className='library__left-wrapper'>
          <h2>Books</h2>
          <form className='library__form-addBook'>
            <p>Book's name</p>
            <input type='text' value={bookName} onChange={onChangeBookName} placeholder="Book's name" />
            <p>Author</p>
            <input type='text' value={bookAuthor} onChange={onChangeBookAuthor} placeholder='Author' />
            <p>Year</p>
            <input type='number' value={bookYear} onChange={onChangeBookYear} placeholder='Year' />
            <p>Quantity</p>
            <input type='number' value={bookQuantity} onChange={onChangeBookQuantity} placeholder='Quantity' />
            <p>Rate</p>
            <input type='number' value={bookRate} onChange={onChangeBookRate} placeholder='Rate' />
            <button className='green-button' onClick={handleAddingNewBook}>Add book</button>

            <button className='red-button' onClick={handleRemovingBook}>Delete book</button>
            <input type="number" value={bookId} onChange={onChangeBookId} />
          </form>
        </div>

        <div className='library__right-wrapper'>
          <h2>Readers</h2>
          <form className='library__form-addUser'>
            <p>Name</p>
            <input type='text' value={userName} onChange={onChangeUserName} placeholder='Name' />
            <p>Surname</p>
            <input type='text' value={userSurname} onChange={onChangeUserSurname} placeholder='Surname' />
            <button className='green-button' onClick={handleAddingNewUser} >Add User</button>

            <button className='red-button' onClick={handleRemovingUser} >Delete User</button>
            <input type="number" value={userId} onChange={onChangeUserId}/>
          </form>
        </div>
      </div>

      <div className='lists-container'>
        {/* Внутри этого дива нужно вывести список книг*/}
        <div className='books'>
          <ul>
            {booksStorage.map(item => {
              return (
                  <li key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.author}</p>
                    <p>{item.year}</p>
                  </li>
              )
            })}
          </ul>
        </div>

        {/* Внутри этого дива нужно вывести список пользователей*/}
        <div className='users'>
          <ul>
            {readers.map(user => {
              return (
                  <li key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.surname}</p>
                  </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export const mapStateToProps = (state) => {
  // console.log(state)
  return {
    readers: state.readers
  }
}
export default connect(mapStateToProps)(Library)