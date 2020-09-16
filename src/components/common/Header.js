import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Header.css'

function Header() {
    const history = useHistory();

    const goto = (event, link) => {
        event.preventDefault();
        history.push(link);
    }
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Nav className="mr-auto">
                <Navbar.Brand onClick={(e) => goto(e, '/products')}>Shoping</Navbar.Brand>
                <Nav.Link onClick={(e) => goto(e, '/products')}>Sklep</Nav.Link>
                <Nav.Link onClick={(e) => goto(e, '/add-product')}>Dodaj produkt</Nav.Link>
            </Nav>
             <Nav>
                <Nav.Link  className="mr-auto" href="#link">Zaloguj</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header
