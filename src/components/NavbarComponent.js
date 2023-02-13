import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarComponet() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"  style={{}}>
            <img
              alt=""
              src="https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              
            />{' '}
          THE CHEFS 
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
}

export default NavbarComponet;