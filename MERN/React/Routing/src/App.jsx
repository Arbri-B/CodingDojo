import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Hello from './components/Hello';
import Number4 from './components/Number4';
import Home from './components/Home';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/4" element = {<Number4/>}/>
      <Route path = "/hello" element = {<Hello/>}/>
      <Route path="/hello/:text/:color/:backgroundColor" component={<StyledPage/>} />   
      </Routes>
    </BrowserRouter>
  )
}

export default App
