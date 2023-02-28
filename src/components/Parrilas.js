import NavbarComponet from './NavbarComponent';
import { VscArrowLeft } from "react-icons/vsc";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Parrillas() {
    return (
        <>
            <NavbarComponet />

            <div>
                <img style={{ margin: "20px" }}
                    alt=""
                    src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-bbq-food-and-drink-poster-image_191508.jpg"
                    width="1220"
                    height="1500"
                    zIndex="-1"



                ></img>

                <div>

                    <h1 style={{ position: 'absolute', top: '15%', width: '100%', textAlign: 'center', fontSize: '60px', fontFamily: 'cursive', color: 'white' }}>Parrilladas</h1>
                </div>

                <div>

                    <h4 style={{ position: 'absolute', top: '40%', width: '100%', fontSize: '25px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}>Parrilla Clásica __________________ $38.980</h4>
                    <p style={{ position: 'absolute', top: '45%', width: '100%', fontSize: '15px', fontFamily: 'cursive', color: 'white', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}>4 Lomos de vacuno3, chorizos parrilleros ,2 chuletas de cerdo ,1/4 de pollo (pechuga) y 2 prietas.</p>

                    <h4 style={{ position: 'absolute', top: '55%', width: '100%', fontSize: '25px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}>Parrilla Especial __________________ $38.980</h4>
                    <p style={{ position: 'absolute', top: '60%', width: '100%', fontSize: '15px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}>4 Lomos (liso) de vacuno3 chorizos parrilleros2 chuletas de cerdo y 2 Filetes envueltos en tocino</p>

                    <h4 style={{ position: 'absolute', top: '70%', width: '100%', fontSize: '25px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}>Parrillada Para Dos __________________ $24.600</h4>
                    <p style={{ position: 'absolute', top: '75%', width: '100%', fontSize: '15px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}>Dos trozos de asiento de picana, dos chuletas vetadas, acompañado de dos papas cocidas, dos longanizas, dos prietas y dos Chunchules</p>

                    <h4 style={{ position: 'absolute', top: '85%', width: '100%', fontSize: '25px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}>Parrillada de Pura Carne (Grande) __________________ $51.600</h4>
                    <p style={{ position: 'absolute', top: '90%', width: '100%', fontSize: '15px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}>Ocho trozos de asiento de picana, acompañado de cuatro papas cocidas, cuatro longanizas, cuatro prietas y cuatro Chunchules.</p>

                    <h4 style={{ position: 'absolute', top: '100%', width: '100%', fontSize: '25px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}>Parrillada de Pura Carne (Chica) __________________ $26.500</h4>
                    <p style={{ position: 'absolute', top: '105%', width: '100%', fontSize: '15px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}>Cuatro trozos de asiento de picana, acompañado de dos papas cocidas, dos longanizas, dos prietas y dos Chunchules</p>

                    <h3 style={{ position: 'absolute', top: '125%', width: '100%', textAlign: 'center', fontSize: '40px', fontFamily: 'cursive', color: 'white' }}>Cortes de Parrilla</h3>

                    <h4  style={{ position: 'absolute', top: '135%', width: '100%', textAlign: 'center', fontSize: '25px', fontFamily: 'cursive', color: 'white' }}>Costillar a la Chilena __________________ $12.980</h4>

                    <h4 style={{ position: 'absolute', top: '145%', width: '100%', textAlign: 'center', fontSize: '25px', fontFamily: 'cursive', color: 'white' }} >Costillar BBQ __________________ $12.980</h4>

                    <h4  style={{ position: 'absolute', top: '155%', width: '100%', textAlign: 'center', fontSize: '25px', fontFamily: 'cursive', color: 'white' }}> Pollo Deshuesado a la Plancha __________________ $8.980</h4>
                    <p style={{ position: 'absolute', top: '160%', width: '100%', textAlign: 'center', fontSize: '17px', fontFamily: 'cursive', color: 'white' }}> (1/4 Pechuga)</p>

                    <h4  style={{ position: 'absolute', top: '170%', width: '100%', textAlign: 'center', fontSize: '25px', fontFamily: 'cursive', color: 'white' }}>Lomo de Vacuno __________________ $12.480.</h4>
                    <p style={{ position: 'absolute', top: '175%', width: '100%', textAlign: 'center', fontSize: '17px', fontFamily: 'cursive', color: 'white' }}>Vetado</p>

                    <h4 style={{ position: 'absolute', top: '185%', width: '100%', textAlign: 'center', fontSize: '25px', fontFamily: 'cursive', color: 'white' }}>Pollo Asado  (Un Cuarto) __________________ $ 3.500</h4>

                    <h4 style={{ position: 'absolute', top: '195%', width: '100%', textAlign: 'center', fontSize: '25px', fontFamily: 'cursive', color: 'white' }}> Longanizas  (Tres Unidades) __________________ $ 3.900</h4>

                    <h4 style={{ position: 'absolute', top: '205%', width: '100%', textAlign: 'center', fontSize: '25px', fontFamily: 'cursive', color: 'white' }}>Prietas  (Tres Unidades) ___________________  $ 3.900</h4>

                    <h4  style={{ position: 'absolute', top: '215%', width: '100%', textAlign: 'center', fontSize: '25px', fontFamily: 'cursive', color: 'white' }}>Chunchules  (Tres Unidades) __________________ $ 3.900</h4>

                   


                </div>





            </div>
            <div>
                <Link to='/carta'>
                    <Button variant="light" style={{ height: '45px', width: '45px', margin: '50px', }}><VscArrowLeft /></Button>
                </Link>
            </div>
        </>
    );
}

export default Parrillas;