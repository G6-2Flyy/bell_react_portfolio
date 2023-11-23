import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Navigation from "./Navigation";

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg"  id="nav-container" className="bg-body-tertiary px-3">
      <Container fluid>
        <Navbar.Brand className='fs-1 text-white'>Bell</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navigation/>
      </Container>
    </Navbar>
    )
}

