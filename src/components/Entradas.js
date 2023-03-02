import NavbarComponet from './NavbarComponent';
import { VscArrowLeft } from "react-icons/vsc";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Img from './Img';


function Entradas() {
    return (
        <>
            <NavbarComponet />

            <div>

                <img style={{ margin: '20px' }}
                    alt=''
                    src='https://img.freepik.com/foto-gratis/vista-superior-tazon-lentejas-variedad-condimentos_1220-423.jpg'
                    width='1200'
                    height='1600'
                    zIndex='-1'
                >
                </img>


                <div>
                    <h1 style={{ position: 'absolute', top: '15%', width: '100%', textAlign: 'center', fontSize: '60px', fontFamily: 'cursive', color: 'white' }}>Entradas</h1>
                </div>


                <div>

                    <h4>Ceviche de reineta y camarón ___________________ $$5.990</h4>
                    <h4>Causa Verde ___________________ $$6.990</h4>
                    <h4>Yuca Frita ___________________ $5.550</h4>
                    <h4> Leche de Tigre ___________________ $4.400</h4>
                    <h4>Chicharrón de Pollo ___________________ $9.150</h4>
                    <h4> Cebiche de Salmón al Apio ___________________ $11.100</h4>
                    <h4></h4>
                    <h4></h4>
                    <h4></h4>
                    <h4></h4>
                    <h4></h4>
                    <h4></h4>
                    <h4></h4>
                    <h4></h4>
                    <h4></h4>
                    <h4></h4>

                </div>


            </div>
        </>
    );
}

export default Entradas;