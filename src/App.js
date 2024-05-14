import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Inicio from './inicio';
import Cadastro from './cadastro';
import Galeria from './galeria';
import Navbar from './componentes/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/cadastro' element={<Cadastro />}/>
          <Route path='/galeria' element={<Galeria />}/>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
