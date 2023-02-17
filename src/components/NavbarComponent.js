import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function NavbarComponet() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <div>
          <Navbar.Brand href="#home"  >
            <img
              alt=""
              src="https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png"
              width="40"
              height="40"
              className="d-inline-block align-top"

            />{' '}
            THE CHEFS
          </Navbar.Brand>
        </div>
        <div>
          <Nav className="me-auto">
            <Link to='/'>
              <Nav.Link href="#inicio"className="" role="navigation">Inicio</Nav.Link>
            </Link>
            <Nav.Link href="#carta">Nuetra Carta</Nav.Link>
            <Nav.Link href="#información">Información</Nav.Link>
            <Nav.Link href="#contacto"> Contacto</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComponet;