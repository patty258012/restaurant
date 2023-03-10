import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import injectContext from './store/AppContext';
import Home from './page/Home';
import Carta from './components/Carta';
import Informacion from "./components/Informacion";
import Contacto from "./components/Contacto";


import Aperitivos from "./components/Aperitivos";
import Compartir from "./components/Compartir";
import Parrillas from "./components/Parrilas";
import Entradas from "./components/Entradas";
import Acompañamientos from "./components/Acompañamientos";



function App() {
   return (

      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carta" element={<Carta />} />
            <Route path="/informacion" element={<Informacion />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/aperitivo" element={<Aperitivos />} />
            <Route path="paracompartir" element={< Compartir />} />
            <Route path="/parrillas" element={<Parrillas />} />
            <Route path="/entradas" element={<Entradas />} />
           <Route path="/acompañamiento" element={<Acompañamientos />} />



         </Routes>
      </BrowserRouter>


   );

}

export default injectContext(App);