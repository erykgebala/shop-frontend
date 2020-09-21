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

    const deleteProduct = (event) => {
        event.preventDefault();
        axios.delete('/products/' + props.product._id).then((products) => {
            history.push('manage-product');
        })
    }

    const getProduct = (event) => {
        event.preventDefault();
        axios.get('/products/' + props.product._id).then((products) => {
            history.push('manage-product');
        })
    }


    let button = '';
    if (props.mode === 'DETAILS') {
        button = 
            <div>
                <Button variant="primary">Do koszyka</Button>
            </div>
    } else if (props.mode === 'USER') {
        button = 
            <div>
                <Button onClick={(e) => productDetails(e)} className="mr-2" variant="primary">Szczegóły</Button>
                <Button variant="primary">Do koszyka</Button>
            </div>
    } else {
        button = 
            <div>
                <Button onClick={(e) => getProduct(e)} className="mr-2" variant="primary">Aktualizuj</Button>
                <Button onClick={(e) => deleteProduct(e)} variant="primary">Usuń</Button>
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
