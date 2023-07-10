import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import AdminPage from './AdminPage';
import RoutesApp from './RoutesApp';
import env from 'react-dotenv';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<RoutesApp/>}/>
          <Route path='/admin/*' element={<AdminPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
