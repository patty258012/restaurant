import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import injectContext from './store/AppContext';
import Home from './page/Home';
import Carta from './components/Carta';
import Informacion from "./components/Informacion";
import Contacto from "./components/Contacto";

function App() {
   return (

      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carta" element={<Carta />} />
            <Route path="/informacion" element={<Informacion />} />
            <Route path="/contacto" element={<Contacto />} />


         </Routes>
      </BrowserRouter>


   );

}

export default injectContext(App);