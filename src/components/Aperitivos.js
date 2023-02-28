import NavbarComponet from './NavbarComponent';
import { CgLogOut } from "react-icons/cg";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



function Aperitivos() {

    return (

        <>
            <NavbarComponet />


            <div style={{ backgroundColor: '#10100B' }}>
                
                <h1 style={{ fontSize: '60px', display: 'flex', justifyContent: 'center', fontFamily: 'cursive', color: 'white' }}>Aperitivos</h1>
                <hr />
                <div>
                    <img className='' style={{ margin: '20px', display: 'flex', justifyContent: 'center' }}

                        alt=""
                        src="https://media.istockphoto.com/id/1177843786/es/foto/varias-bebidas-alcoh%C3%B3licas-sobre-un-fondo-negro.jpg?s=170667a&w=0&k=20&c=QRBZ693iUMuKCPlUde7NFRO3P9g5JBq92yKRFpFkpZA="
                        width="1200"
                        height="800"
                        zIndex="-1"

                    >
                    </img>

                    <h4 style={{ position: 'absolute', top: '30%', textAlign: 'center', fontSize: '25px', color: 'white', margin: '30px' }} >Bebida lata Variedades ___________________ $2500. </h4>
                    <h4 style={{ position: 'absolute', top: '40%', textAlign: 'center', fontSize: '25px', color: 'white', margin: '25px' }} > Cerveza Kunstmann Torobayo_______________ $4.180.</h4>
                    <h4 style={{ position: 'absolute', top: '50%', textAlign: 'center', fontSize: '25px', color: 'white', margin: '30px' }} > Cerveza Cristal (Lata) __________________ $2.980.</h4>
                    <p style={{ position: 'absolute', top: '55%', textAlign: 'center', fontSize: '14px', color: 'white', margin: '30px' }} >Con / Sin Alcohol</p>
                    <h4 style={{ position: 'absolute', top: '60%', textAlign: 'center', fontSize: '25px', color: 'white', margin: '30px' }} > Cerveza Corona ___________________        $3.700</h4>
                    <h4 style={{ position: 'absolute', top: '70%', textAlign: 'center', fontSize: '25px', color: 'white', margin: '30px' }} > Pisco Sour a la Peruana __________________ $6.980</h4>
                    <h4 style={{ position: 'absolute', top: '80%', textAlign: 'center', fontSize: '25px', color: 'white', margin: '30px' }} > Pisco Sour Catedral ___________________ $7.200</h4>
                    <h4 style={{ position: 'absolute', top: '100%', textAlign: 'center', fontSize: '25px', color: 'white', margin: '30px' }} > Mojito Fidel 1Lts __________________ $9.980</h4>
                    <h4 style={{ position: 'absolute', top: '110%', textAlign: 'center', fontSize: '25px', color: 'white', margin: '30px' }} > Mojito Cubano __________________ $5.480</h4>
                    <h4 style={{ position: 'absolute', top: '120%', textAlign: 'center', fontSize: '25px', color: 'white', margin: '30px' }} > Jugos __________________ $3.480</h4>
                    <p style={{ position: 'absolute', top: '125%', textAlign: 'center', fontSize: '14px', color: 'white', margin: '30px' }} >Consultar opciones disponibles!</p>
                </div>


                <div>
                    <Link to='/carta'>
                        <Button variant="light" style={{ height: '45px', width: '45px', margin: '50px' }}><CgLogOut /></Button>
                    </Link>
                </div>
            </div>


        </>
    );
}

export default Aperitivos;