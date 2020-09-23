import React, {useEffect,useState} from 'react'
import axios from '../../axiosConfig'; 
import CartItem from './CartItem';
import './Cart.css'
import { Button } from 'react-bootstrap';

function Cart(props) {
    const [products, setProducts] = useState([]);

    const getCart = () => {
        axios.get('/api/cart').then((products) => {
            setProducts(products.data);
        })
    }
    useEffect(() =>{
        getCart()
    }, [])

    const removeProductFromCart = (event, prodId) => {
        event.preventDefault();
        axios.delete('/api/cart/' + prodId).then(() => {
            getCart();
        })
    }

    const doOrder = (event) => {
        event.preventDefault(); 
    }

    return (
        <div className="cart-container">
            <div className="cart-content">
                {products.map(product => {
                return <CartItem key={product._id} product={product} removeProductFromCart={removeProductFromCart}/> 
                })}
            </div>
            <Button variant="success" onClick={(e) => doOrder(e)}>Zamów</Button>
        </div>
    )
}

export default Cart
