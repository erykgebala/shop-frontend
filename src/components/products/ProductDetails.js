import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../../axiosConfig';
import Product from './Product';
import './ProductDetails.css'

function ProductDetails() {
    const [product, setProduct] = useState('');
    const  { id } = useParams();

    useEffect(() =>{
        axios.get('/api/products/' + id).then((products) => {
            setProduct(products.data);
        })
    }, []);

    return (
        <div className="product-detail">
            <Product key={product._id} product={product} mode={'DETAILS'}/> 
        </div>
    )
}

export default ProductDetails
