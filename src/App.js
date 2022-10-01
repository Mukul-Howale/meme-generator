import React from 'react';
import Header from "./components/Header";
import Input from "./components/Input";
import Output from './components/Output';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='meme'>
        <Input/>
        <Output/>
      </div>
    </div>
  );
}

export default App;
