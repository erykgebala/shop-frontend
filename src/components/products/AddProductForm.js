import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import axios from '../../axiosConfig'; 
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../state/StateProvider';
import  actionsTypes  from '../../state/actions';


function AddProductForm() {
    const [{currentLink}, dispatchAction] = useStateValue();
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImageUrl, setProductImageUrl] = useState('');
    const [productDesc, setProductDesc] = useState('');
    const history = useHistory();
    const  { id } = useParams();
    const [showContent, setShowContent] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (id) {
            axios.patch('/api/products/' + id, {
                name: productName,
                price: productPrice,
                imageUrl: productImageUrl,
                desc: productDesc
            }).then(() => {
                history.push('/manage-products');
            });
        } else {
            axios.post('/api/products', {
                name: productName,
                price: productPrice,
                imageUrl: productImageUrl,
                desc: productDesc
            }).then(() => {
                history.push('/manage-products');
            });
        }
    }

    useEffect(() =>{
        if (id) {
            axios.get('/api/products/' + id).then((products) => {
                setProductName(products.data.name);
                setProductPrice(products.data.price);
                setProductImageUrl(products.data.imageUrl);
                setProductDesc(products.data.desc);
                setShowContent(true);
            });
            dispatchAction({
                type: actionsTypes.CURRENT_LINK_ACTION,
                currentLink: '/manage-products'
            });
        } else {
            setProductName('');
            setProductPrice('');
            setProductImageUrl('');
            setProductDesc('');
            setShowContent(true);
        }
    }, [id]);

    let content;
    if (showContent) (
        content = 
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

                <Button variant="primary" type="submit">Zapisz</Button>
            </Form>
    )

    return (
        <div className="add-form">
            {content}
        </div>
    )
}

export default AddProductForm
