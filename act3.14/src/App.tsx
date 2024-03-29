import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio'
import RazaInfo from './paginas/GatoInfo';
import RazaPInfo from './paginas/PerrosInfo';

function App() {
  return (
    <>
       <BrowserRouter >
        <Routes>
          <Route index element={<Inicio />} />
          <Route path='RazaGato' element={<RazaInfo id={""}/>} />
          <Route path='RazaPerro' element={<RazaPInfo id={""}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
