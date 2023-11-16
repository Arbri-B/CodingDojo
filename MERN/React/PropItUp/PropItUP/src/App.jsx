import { useState } from 'react';
import React from 'react';
import './App.css';
import PersonCard from './Components/PersonCard';

function App() {

  return (
    <>
      <PersonCard lastName = {"Doe"} firstName = {"Jane"} age = {"45"} hairColor = {"black"}/>
      <PersonCard lastName = {"Smith"} firstName = {"John"} age = {"88"} hairColor = {"brown"}/>
      <PersonCard lastName = {"Fillmore"} firstName = {"Millard"} age = {"50"} hairColor = {"brown"}/>
      <PersonCard lastName = {"Smith"} firstName = {"Maria"} age = {"62"} hairColor = {"brown"}/>
    </>
  )
}

export default App;
