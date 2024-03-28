import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio'

function App() {
  return (
    <>
       <BrowserRouter >
        <Routes>
          <Route index element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
