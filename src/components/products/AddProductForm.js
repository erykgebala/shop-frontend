import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './AddProductForm.css'
import axios from '../../axiosConfig'; 
import { useHistory } from 'react-router-dom';

function AddProductForm() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImageUrl, setProductImageUrl] = useState('');
    const [productDesc, setProductDesc] = useState('');
    const history = useHistory();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/products', {
            name: productName,
            price: productPrice,
            imageUrl: productImageUrl,
            desc: productDesc
        }).then(() => {
            history.push('/products');
        });


    }

    return (
        <div className="product-form">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Nazwa</Form.Label>
                    <Form.Control type="text" placeholder="Podaj nazwę" value={productName} onChange={(e) => setProductName(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPrice">
                    <Form.Label>Cena</Form.Label>
                    <Form.Control type="text" placeholder="Podaj cenę"  value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicImageUrl">
                    <Form.Label>Link do zdjęcia</Form.Label>
                    <Form.Control type="text" placeholder="Podaj link do zdjecia"  value={productImageUrl} onChange={(e) => setProductImageUrl(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicDesc">
                    <Form.Label>Opis</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Podaj opis"  value={productDesc} onChange={(e) => setProductDesc(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Zapisz
                </Button>
            </Form>
        </div>
    )
}

export default AddProductForm
