import React from 'react';
import './App.css'
import {BrowserRouter,Route, Routes } from 'react-router-dom';
import Uiux from './component/UiUx';
import Home from './component/Home';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        <Routes>
          <Route path='/sample' element={<Uiux/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
