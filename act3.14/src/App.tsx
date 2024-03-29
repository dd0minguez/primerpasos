import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio'


function App() {
  return (
    <>
       <BrowserRouter >
        <Routes>
          <Route path='/' index element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
