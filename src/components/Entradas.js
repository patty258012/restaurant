import NavbarComponet from './NavbarComponent';
import { VscArrowLeft } from "react-icons/vsc";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



function Entradas() {
    return (
        <>
            <NavbarComponet />



            <div>


                <div>
                    <br />
                    <br />
                    <h1 style={{ position: 'absolute', width: '100%', textAlign: 'center', fontSize: '60px', fontFamily: 'cursive', color: 'white', top: '8%' }}>Entradas</h1>

                </div>

                <br />
                
                <img style={{ margin: '20px' }}
                    alt=''
                    src='https://img.freepik.com/foto-gratis/vista-superior-tazon-lentejas-variedad-condimentos_1220-423.jpg'
                    width='1200'
                    height='1000'
                    zIndex='-1'
                >
                </img>





                <div>

                    <h4 style={{ position: 'absolute', top: '30%', width: '100%', fontSize: '20px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}>Ceviche de reineta y camarón ___________________ $$5.990</h4>

                    <h4 style={{ position: 'absolute', top: '40%', width: '100%', fontSize: '20px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}>Causa Verde ___________________ $$6.990</h4>

                    <h4 style={{ position: 'absolute', top: '50%', width: '100%', fontSize: '20px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}>Yuca Frita ___________________ $5.550</h4>

                    <h4 style={{ position: 'absolute', top: '60%', width: '100%', fontSize: '20px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}> Leche de Tigre ___________________ $4.400</h4>

                    <h4 style={{ position: 'absolute', top: '70%', width: '100%', fontSize: '20px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}>Chicharrón de Pollo ___________________ $9.150</h4>

                    <h4 style={{ position: 'absolute', top: '80%', width: '100%', fontSize: '20px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}> Cebiche de Salmón al Apio ___________________ $11.100</h4>

                    <h4 style={{ position: 'absolute', top: '90%', width: '100%', fontSize: '20px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}>Mozzarella di búfala, tomate y pesto ___________________ $11.900</h4>

                    <h4 style={{ position: 'absolute', top: '100%', width: '100%', fontSize: '20px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}> Ostiones, pulpo y camaron gratinados con queso grana padano ___________________ $12.500 </h4>

                    <h4 style={{ position: 'absolute', top: '110%', width: '100%', fontSize: '20px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}> Vitello tonnato, láminas de ternera, mayonesa y alcaparras ___________________ $9.800 </h4>

                    <h4 style={{ position: 'absolute', top: '120%', width: '100%', fontSize: '20px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}> Crema de Esparragos ___________________ $5990</h4>

                    <h4 style={{ position: 'absolute', top: '130%', width: '100%', fontSize: '20px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}>Crema de Zapallo ___________________ $5990 </h4>

                    <h4 style={{ position: 'absolute', top: '140%', width: '100%', fontSize: '20px', fontFamily: 'cursive', color: 'white', display: 'flex', justifyContent: 'center' }}>Crema de Tomate  ___________________ $5990</h4>
                    <h4></h4>
                    <h4></h4>
                    <h4></h4>
                    <h4></h4>

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

export default Entradas;