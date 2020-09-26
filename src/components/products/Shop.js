import React, {useEffect,useState} from 'react'
import axios from '../../axiosConfig'; 
import ProductList from './ProductList'

function Shop() {
    const [products, setProducts] = useState([]);
    const [showContent, setShowContent] = useState(false);

    const getProducts = () => {
        axios.get('/api/products').then((products) => {
            setProducts(products.data);
            setShowContent(true);
        })
    }

    useEffect(() =>{
        getProducts();
    }, []);

    return (
        <div>
            {showContent ? <ProductList products={products} mode={'USER'}/> : '' }
        </div>
    )
}

export default Shop
