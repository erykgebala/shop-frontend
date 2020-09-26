import React, {useEffect,useState} from 'react'
import axios from '../../axiosConfig'; 
import CartItem from './CartItem';
import './Cart.css'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Cart(props) {
    const [products, setProducts] = useState([]);
    const [showContent, setShowContent] = useState(false);
    const history = useHistory();

    const getCart = () => {
        axios.get('/api/cart').then((products) => {
            setProducts(products.data);
            setShowContent(true);
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
        axios.post('/api/orders').then(() => {
            history.push('/orders');
        })
    }

    let cartContent;
    if (showContent) {
        if (products.length > 0) {
            cartContent = <> 
                <div className="cart-content">
                    {products.map(product => {
                        return <CartItem key={product._id} product={product} removeProductFromCart={removeProductFromCart}/> 
                    })}
                </div>
                <Button variant="success" onClick={(e) => doOrder(e)}>Zamów</Button>
            </>
        } else {
            cartContent = <div className='empty-list'>Koszyk jest pusty</div> 
        }
    }

    return (
        <div className="cart-container">
            {cartContent}
        </div>
    )
}

export default Cart
