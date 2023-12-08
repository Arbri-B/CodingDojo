import React from 'react';
import './App.css';
import "./Components/Styles.css";
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import Advertisement from './Components/Advertisement';
import Subcontent from './Components/SubContent';

function App() {
  return (
    <div className="app">
      <Header />
      <div className= "container">
        <Navigation />
        <Main>
          <div className='subContainer'>
            <Subcontent />
            <Subcontent />
            <Subcontent />
          </div>
          <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;

