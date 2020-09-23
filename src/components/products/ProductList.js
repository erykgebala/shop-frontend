import React from 'react'
import Product from './Product';
import './ProductList.css'

function ProductList(props) {

    return (
        <div className="product-list">
            {props.products.map(product => {
               return <Product key={product._id} product={product} mode={props.mode} deleteProduct={props.deleteProduct}/> 
            })}
        </div>
    )
}

export default ProductList
