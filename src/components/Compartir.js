import NavbarComponet from './NavbarComponent';
import { CgLogOut } from "react-icons/cg";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function Compartir() {
    return (
        <>
            <NavbarComponet />


            <img style={{ borderRadius: '300px', margin: '20px', display: 'flex', justifyContent: 'center', border: 'black' }}
                alt=''
                src='https://i.pinimg.com/originals/e5/bd/d2/e5bdd2f3e613c51f401b2f8a8aee0e67.jpg'
                width="1200"
                height="300"
                zIndex="-1"

            >
            </img>

            <div>



                <h1 style={{  position:'absolute', top:'30%',width:'100%', textAlign:'center' , fontSize:'60px', fontFamily: 'cursive', color: 'white' }}>Para compartir</h1>
            </div>

            <br/>
            <br/>
            <div>

                <div classname='box' style={{}}>

                    <h4 style={{ display: 'flex', justifyContent: 'center', top: '15%', fontSize: '19px', color: 'black', margin: '20px' }}>Ceviche Mixto Estilo Limeño_______________ $10.980</h4>
                    <h4 style={{ display: 'flex', justifyContent: 'center', top: '26%', fontSize: '19px', color: 'black', margin: '20px' }}>Camarones al Pil-Pi __________________ $8.980</h4>
                    <p style={{ display: 'flex', justifyContent: 'center', top: '28%', fontSize: '16px', color: 'black', margin: '13px' }}>Pil-Pil || Provenzal || Salteados</p>
                    <h4 style={{ display: 'flex', justifyContent: 'center', top: '34%', fontSize: '19px', color: 'black', margin: '20px' }}>Empanada de Queso Frita __________________$5.380 </h4>
                    <p style={{ display: 'flex', justifyContent: 'center', top: '38%', fontSize: '16px', color: 'black', margin: '13px' }}>6 Unidades cóctel</p>
                    <h4 style={{ display: 'flex', justifyContent: 'center', top: '42%', fontSize: '19px', color: 'black', margin: '20px' }}>Sopaipillas con Pebre __________________ $4.980</h4>
                    <h4 style={{ display: 'flex', justifyContent: 'center', top: '46%', fontSize: '19px', color: 'black', margin: '20px' }}>Surtido de Empanadas __________________ $5.380</h4>
                    <p style={{ display: 'flex', justifyContent: 'center', top: '50%', fontSize: '16px', color: 'black', margin: '13px' }}>3 de Pino – 3 de Queso</p>
                    <h4 style={{ display: 'flex', justifyContent: 'center', top: '54%', fontSize: '19px', color: 'black', margin: '20px' }}>Machas A La Parmesana __________________ $10.980</h4>
                    <h4 style={{ display: 'flex', justifyContent: 'center', top: '58%', fontSize: '19px', color: 'black', margin: '20px' }}>Ceviche de Salmón __________________  $10.980</h4>

                    <h3 style={{ display: 'flex', justifyContent: 'center', top: '65%', fontSize: '35px', color: 'black', margin: '20px' }}>Tablas</h3>

                    <h4 style={{ display: 'flex', justifyContent: 'center', top: '74%', fontSize: '19px', color: 'black', margin: '20px' }}>Tabla Mixta de Jamon y Queso  __________________ $12990</h4>
                    <p style={{ display: 'flex', justifyContent: 'center', top: '78%', fontSize: '16px', color: 'black', margin: '13px' }}>abla con diversas variedades de jamones y quesos.</p>
                    <h4 style={{ display: 'flex', justifyContent: 'center', top: '82%', fontSize: '19px', color: 'black', margin: '20px' }}>Tabla Mixta  __________________ $12990</h4>
                    <p style={{ display: 'flex', justifyContent: 'center', top: '86%', fontSize: '16px', color: 'black', margin: '13px' }}>Variedad de Quesos, Jamones, Verduras y Frutos Secos.</p>
                    <h4 style={{ display: 'flex', justifyContent: 'center', top: '90%', fontSize: '19px', color: 'black', margin: '20px' }}>Quesos Variados __________________ $15990</h4>
                    <p style={{ display: 'flex', justifyContent: 'center', top: '94%', fontSize: '16px', color: 'black', margin: '13px' }}>Todo tipo de quesos para digustar.</p>
                    <h4 style={{ display: 'flex', justifyContent: 'center', top: '98%', fontSize: '19px', color: 'black', margin: '20px' }}>Tabla Surtida  __________________  $18990</h4>
                    <p style={{ display: 'flex', justifyContent: 'center', top: '102%', fontSize: '16px', color: 'black', margin: '13px' }}>Variedad entre dulce y salado</p>



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

export default Compartir;