import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Register from './pages/register';
import Login from './pages/login';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;
