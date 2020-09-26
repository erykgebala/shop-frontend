import React from 'react'
import { Table } from 'react-bootstrap'

function Order(props) {
    return (
        <Table className="orders" striped bordered hover>
            <thead>
                <tr>
                    <th>Numer zamównia</th>
                    <th>Produkt</th>
                    <th>Ilość</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {props.order.products.map(productItem => {
                    return (
                        <tr key={productItem.product._id}>
                            <td>{props.order._id}</td>
                            <td>{productItem.product.name}</td>
                            <td>{productItem.quantity}</td>
                            <td>{props.order.state}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default Order
