import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pg/Navbar';
// import Inicio from './pg/Inicio';

function App() {
  return (
    <>
       <BrowserRouter >
       <Menu/>
        <Routes>
          {/* <Route path='/' index element={</>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
