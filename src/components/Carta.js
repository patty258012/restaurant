import NavbarComponet from './NavbarComponent';
import Footer from './Footer';


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

                <li style={{ position: 'absolute', top: '75%', width: '100%', textAlign: 'center', fontSize: '25px', color: 'white' }}>Aperitivos</li>
                <li style={{ position: 'absolute', top: '83%', width: '100%', textAlign: 'center', fontSize: '25px', color: 'white',}} >Para Compartir</li>
                <li style={{ position: 'absolute', top: '91%', width: '100%', textAlign: 'center', fontSize: '25px', color: 'white' }}>Cortes de Parrilla</li>
                <li style={{ position: 'absolute', top: '99%', width: '100%', textAlign: 'center', fontSize: '25px', color: 'white' }}>Entradas  </li>
                <li style={{ position: 'absolute', top: '107%', width: '100%', textAlign: 'center', fontSize: '25px', color: 'white' }}>Acompañamientos</li>
                <li style={{ position: 'absolute', top: '115%', width: '100%', textAlign: 'center', fontSize: '25px', color: 'white' }}>Ensaladas</li>
                <li style={{ position: 'absolute', top: '123%', width: '100%', textAlign: 'center', fontSize: '25px', color: 'white' }}>Vegetariano </li>
                <li style={{ position: 'absolute', top: '131%', width: '100%', textAlign: 'center', fontSize: '25px', color: 'white' }}>Menu Kids</li>
                <li style={{ position: 'absolute', top: '139%', width: '100%', textAlign: 'center', fontSize: '25px', color: 'white' }}>Vinos </li>
                

            </div>


            <Footer />
        </>

    );
}

export default Carta;