import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio'
import Menu from './paginas/Navbar';


function App() {
  return (
    <>
       <BrowserRouter >
       <Menu/>
        <Routes>
          <Route path='/' index element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
