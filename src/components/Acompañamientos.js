import NavbarComponet from './NavbarComponent';
import { CgLogOut } from "react-icons/cg";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function Acompañamientos() {
    return (



        <>

            <NavbarComponet />
            <div>

            </div>

            <div>
                <Link to='/carta'>
                    <Button variant="light" style={{ height: '45px', width: '45px', margin: '50px', color: 'green' }}><CgLogOut /></Button>
                </Link>
            </div>
        


</>

    );
}

export default Acompañamientos;