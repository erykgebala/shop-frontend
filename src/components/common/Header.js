import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Header.css'

function Header() {
    const [currentLink, setCurrentLink] = useState('products');
    const history = useHistory();

    const goto = (event, link) => {
        event.preventDefault();
        setCurrentLink(link)
        history.push(link);
    }
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Nav className="mr-auto">
                <Navbar.Brand onClick={(e) => goto(e, '/products')}>Shoping</Navbar.Brand>
                <Nav.Link className={currentLink == '/products' ? 'active': ''} onClick={(e) => goto(e, '/products')}>Sklep</Nav.Link>
                <Nav.Link className={currentLink == '/cart' ? 'active': ''} onClick={(e) => goto(e, '/cart')}>Koszyk</Nav.Link>
                <Nav.Link className={currentLink == '/orders' ? 'active': ''} onClick={(e) => goto(e, '/orders')}>Zamowienia</Nav.Link>
            </Nav>
             <Nav>
                <Nav.Link className={currentLink == '/add-product' ? 'active': ''} onClick={(e) => goto(e, '/add-product')}>Dodaj produkt</Nav.Link>
                <Nav.Link className={currentLink == '/manage-products' ? 'active': ''} onClick={(e) => goto(e, '/manage-products')}>Zarzadzaj produktami</Nav.Link>
                <Nav.Link className="mr-auto" href="#link">Zaloguj</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header
