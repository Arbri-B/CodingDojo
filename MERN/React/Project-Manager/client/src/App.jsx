import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateProduct from './components/CreateProductForm';
import Home from './components/Home';
import SingleProduct from './components/SingleProduct';
import EditProduct from './components/EditProduct';

function App() {

  
   // declaring the state
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Home/>} />
        
        <Route path='/product/create' element={<CreateProduct />} />
        
        <Route path="/product/:id" element={<SingleProduct/>}/>
        <Route path="/product/edit/:id" element={<EditProduct/>}/>
      
      </Routes>
    </BrowserRouter>
  )
}

export default App