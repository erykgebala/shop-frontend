import React, {useEffect,useState} from 'react'
import Product from './Product';
import './ProductList.css'
import axios from '../../axiosConfig'; 

function ProductList(props) {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        axios.get('/products').then((products) => {
            setProducts(products.data);
        })
    }, []);

    return (
        <div className="product-list">
            {products.map(product => {
               return <Product key={product._id} product={product} mode={props.mode}/> 
            })}
        </div>
    )
}

export default ProductList
