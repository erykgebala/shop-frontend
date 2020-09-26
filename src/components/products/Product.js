import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import axios from '../../axiosConfig'; 

function Product(props) {
    const history = useHistory();

    const productDetails = (event) => {
        event.preventDefault();
        history.push('/product-details/' + props.product._id);
    }

    const getProduct = (event) => {
        event.preventDefault();
        history.push('/add-product/' + props.product._id);
    }

    const addToCart = (event) => {
        event.preventDefault();
        axios.post('/api/cart', {productId: props.product._id}).then((products) => {
            history.push('/cart');
        });
    }


    let button = '';
    if (props.mode === 'DETAILS') {
        button = 
            <div>
                <Button onClick={(e) => addToCart(e)} variant="primary">Do koszyka</Button>
            </div>
    } else if (props.mode === 'USER') {
        button = 
            <div>
                <Button onClick={(e) => productDetails(e)} className="mr-2" variant="primary">Szczegóły</Button>
                <Button onClick={(e) => addToCart(e)}  variant="primary">Do koszyka</Button>
            </div>
    } else {
        button = 
            <div>
                <Button onClick={(e) => getProduct(e)} className="mr-2" variant="primary">Aktualizuj</Button>
                <Button onClick={(e) => props.deleteProduct(e, props.product._id)} variant="danger">Usuń</Button>
            </div>
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={'/' + props.product.imageUrl} />
            <Card.Body>
                <Card.Title>{props.product.name}</Card.Title>
                <Card.Text>
                    {props.product.price}
                </Card.Text>
                <Card.Text>
                    {props.product.desc}
                </Card.Text>
                {button}
            </Card.Body>
        </Card>
    )
}

export default Product
