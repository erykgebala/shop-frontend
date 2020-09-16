import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Product(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.product.imageUrl} />
            <Card.Body>
                <Card.Title>{props.product.name}</Card.Title>
                <Card.Text>
                {props.product.price}
                </Card.Text>
                <Card.Text>
                {props.product.desc}
                </Card.Text>
                <Button variant="primary">Do koszyka</Button>
            </Card.Body>
        </Card>
    )
}

export default Product
