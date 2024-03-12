import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const currentPage = useLocation().pathname;

    return (
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
                <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>About Me</Link>
                <Link to="/portfolio" className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>Web Development Projects</Link>
                <Link to="/data_portfolio" className={currentPage === '/data_portfolio' ? 'nav-link active' : 'nav-link'}>Data Analytics Projects</Link>
                <Link to="/contact" className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
                <Link to="/resume" className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
            </Nav>
        </Navbar.Collapse>
    )
}


