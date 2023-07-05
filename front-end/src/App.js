import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;
