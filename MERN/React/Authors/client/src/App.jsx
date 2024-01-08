import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NewAuthor from './components/NewAutor';
import Authors from './components/Authors';
import Update from './components/EditAuthor';

function App() {

  
   // declaring the state
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Authors />} />
        <Route path='/home' element={<Authors />} />
        
        <Route path='/author/add' element={<NewAuthor />} />
        
        <Route path="/author/edit/:id" element={<Update />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App