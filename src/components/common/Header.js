import React, {useState, useEffect} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Header.css'
import { useStateValue } from '../../state/StateProvider';
import  actionsTypes  from '../../state/actions';

function Header() {
    const [{currentLink}, dispatchAction] = useStateValue();
    const history = useHistory();
    const location = useLocation();

    const goto = (event, link) => {
        event.preventDefault();
        dispatchAction({
            type: actionsTypes.CURRENT_LINK_ACTION,
            currentLink: link
        });
        history.push(link);
    }

    useEffect(() => {
        dispatchAction({
            type: actionsTypes.CURRENT_LINK_ACTION,
            currentLink: location.pathname
        });
    }, []);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Nav className="mr-auto">
                <Navbar.Brand onClick={(e) => goto(e, '/products')}>Shoping</Navbar.Brand>
                <Nav.Link className={currentLink == '/products' || currentLink.indexOf('/product-details') != -1 ? 'active': ''} onClick={(e) => goto(e, '/products')}>Sklep</Nav.Link>
                <Nav.Link className={currentLink == '/cart' ? 'active': ''} onClick={(e) => goto(e, '/cart')}>Koszyk</Nav.Link>
                <Nav.Link className={currentLink == '/orders' ? 'active': ''} onClick={(e) => goto(e, '/orders')}>Zamowienia</Nav.Link>
            </Nav>
             <Nav>
                <Nav.Link className={currentLink == '/add-product' ? 'active': ''} onClick={(e) => goto(e, '/add-product')}>Dodaj produkt</Nav.Link>
                <Nav.Link className={currentLink == '/manage-products' ? 'active': ''} onClick={(e) => goto(e, '/manage-products')}>Zarzadzaj produktami</Nav.Link>
                <Nav.Link className={currentLink == '/login' ? 'active': ''}  onClick={(e) => goto(e, '/login')}>Zaloguj</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header
