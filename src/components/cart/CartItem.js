import React from 'react'
import { Button } from 'react-bootstrap';
import axios from '../../axiosConfig'; 

function CartItem(props) {

    return (
        <div className="cart-item">
            <span>{props.product.productId.name}</span> 
            <span>Ilość: {props.product.quantity}</span>
            <Button variant="danger" onClick={(e) => props.removeProductFromCart(e, props.product.productId._id)}>Usuń</Button>
        </div>
    )
}

export default CartItem
