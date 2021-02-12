import React from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/header/Header'

import styled from 'styled-components';
 
const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
 
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App
