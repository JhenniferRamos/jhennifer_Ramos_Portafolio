import logo from './logo.svg';
import './App.css';
import {Footer} from './components/footer/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navegacion/Navbar';
import { Acercademi } from './components/paginas/Acercademi';
import { Habilidades } from './components/paginas/Habilidades';
import { Proyectos } from './components/paginas/Proyectos';
import { Experiencialab } from './components/paginas/Experiencialab';
import { Educacion } from './components/paginas/Educacion';
import { Contacto } from './components/paginas/Contacto';

function App() {
  return (

    <div className="App">
      <h1>Mi portafolio personal</h1>
      <Router>
        <Navbar></Navbar>
        
        <Routes>
          <Route path= "/" element= {<Acercademi/>} />
          <Route path= "/habilidades" element= {<Habilidades/>} />
          <Route path= '/proyectos' element= {<Proyectos/>} />
          <Route path= '/experiencialab' element= {<Experiencialab/>} />
          <Route path= '/educacion'  element= {<Educacion/>} />
          <Route path= '/contacto' element= {<Contacto/>} />
        </Routes>
      </Router>
     
      <Footer></Footer>
    </div>
  );
}

export default App;
