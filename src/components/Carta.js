import NavbarComponet from './NavbarComponent';
import Footer from './Footer';
import { Link } from "react-router-dom";


function Carta() {
    return (
        <>
            <NavbarComponet />

            <hr />
            <div>

                <h1 style={{ fontSize: '60px', display: 'flex', justifyContent: 'center', fontFamily: 'cursive', }}>Nuestra Carta</h1>

            </div>
            <hr />
            <div className='' style={{ margin: '10px', display: 'flex', justifyContent: 'center' }}>
                <img
                    alt=""
                    src="https://aprende.com/wp-content/uploads/2020/11/como-crear-el-menu-de-tu-restaurante.png"
                    width="950"
                    height="800"
                    zIndex="-1"


                >
                </img>





                <Link to='/aperitivo' variant="link" style={{ position: 'absolute', top: '75%', width: '10%', textAlign: 'center', fontSize: '19px', color: 'white', height: '10%' }}>Aperitivos</Link>
                <Link to='/paracompartir' variant="link" style={{ position: 'absolute', top: '82%', width: '10%', textAlign: 'center', fontSize: '19px', color: 'white', height: '10%' }}>  compartir </Link>
                <Link to='/parrillas' variant="link" style={{ position: 'absolute', top: '89%', width: '10%', textAlign: 'center', fontSize: '19px', color: 'white', height: '10%' }}> Parrillas</Link>
                <Link to='/entradas' variant="link" style={{ position: 'absolute', top: '96%', width: '10%', textAlign: 'center', fontSize: '19px', color: 'white', height: '10%' }}>Entradas</Link>
                <Link to='/acompañamiento' variant="link" style={{ position: 'absolute', top: '103%', width: '10%', textAlign: 'center', fontSize: '19px', color: 'white', height: '10%' }}>Acompañamientos</Link>
                <Link to='/ensaladas' variant="link" style={{ position: 'absolute', top: '110%', width: '10%', textAlign: 'center', fontSize: '19px', color: 'white', height: '10%' }}>Ensaladas</Link>
                <Link to='/vegetaiano' variant="link" style={{ position: 'absolute', top: '117%', width: '10%', textAlign: 'center', fontSize: '19px', color: 'white', height: '10%' }}>Vegetariano</Link>
                <Link to='/menukids' variant="link" style={{ position: 'absolute', top: '124%', width: '10%', textAlign: 'center', fontSize: '19px', color: 'white', height: '10%' }}>Menu Kids</Link>
                <Link to='/vinos' variant="link" style={{ position: 'absolute', top: '133%', width: '10%', textAlign: 'center', fontSize: '19px', color: 'white', height: '10%' }}>Vinos</Link>

                


            </div>


            <Footer />
        </>

    );
}

export default Carta;