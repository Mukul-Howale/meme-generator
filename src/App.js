import React from 'react';
import Header from "./components/Header";
import Input from "./components/Input";
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='meme'>
        <Input/>
      </div>
    </div>
  );
}

export default App;
