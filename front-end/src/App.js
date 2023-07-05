import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import Profile from './pages/profile';
import CustomNavbar from './components/navbar';

const App = () => {
  const token = localStorage.getItem('token');

  return (
    <>
      <CustomNavbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={token ? <Home/> : <Register/>}/>
          <Route path='/login' element={token ? <Home/> : <Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
