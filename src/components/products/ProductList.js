import React, {useEffect,useState} from 'react'
import Product from './Product';
import './ProductList.css'
import axios from '../../axiosConfig'; 

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        axios.get('/products').then((products) => {
            console.log(products)
            setProducts(products.data);
        })
    }, []);

    return (
        <div className="product-list">
            {products.map(product => {
               return <Product product={product}/> 
            })}
        </div>
    )
}

export default ProductList
