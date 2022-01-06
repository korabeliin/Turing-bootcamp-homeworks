import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ImagesGallery from './containers/ImagesGallery';
import Todos from './containers/Todos';
import MaingPage from './containers/MainPage'
import Header from './components/Header';

const Main = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<MaingPage/>} />
        <Route path='/todos' element={<Todos/>} />
        <Route path='/gallery' element={<ImagesGallery/>} />
      </Routes>
    </div>
  )
}

export default Main;