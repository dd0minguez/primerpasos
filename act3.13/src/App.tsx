import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./componentes/Navbar";
import Inicio from "./paginas/Inicio";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PuntoInteres from "./paginas/PuntoInteres";
import Restaurantes from './paginas/Restaurantes';
import Hoteles from './paginas/Hoteles';
import Actividades from './paginas/Actividades';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/PuntoInteres" element={<PuntoInteres />} />
          <Route path="/Restaurantes" element={<Restaurantes />} />
          <Route path="/Hoteles" element={<Hoteles />} />
          <Route path="/Actividades" element={<Actividades />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
