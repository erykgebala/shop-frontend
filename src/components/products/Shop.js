import React, {useEffect,useState} from 'react'
import axios from '../../axiosConfig'; 
import ProductList from './ProductList'

function Shop() {
    const [products, setProducts] = useState([]);
    
    const getProducts = () => {
        axios.get('/api/products').then((products) => {
            setProducts(products.data);
        })
    }

    useEffect(() =>{
        getProducts();
    }, []);

    return (
        <div>
            <ProductList products={products} mode={'USER'}/>
        </div>
    )
}

export default Shop
