import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './ToDo/table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Destinos para viajar</h1>
        <Table/>
      </header>
    </div>
  );
}

export default App;
