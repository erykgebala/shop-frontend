import React, {useEffect,useState} from 'react'
import ProductList from './ProductList'
import axios from '../../axiosConfig'; 
import { useHistory } from 'react-router-dom';

function ManageProducts(props) {
    const [products, setProducts] = useState([]);
    const history = useHistory();

    const getProducts = () => {
        axios.get('/api/products').then((products) => {
            setProducts(products.data);
        })
    }
    
    useEffect(() =>{
        getProducts();
    }, []);

    const deleteProduct = (event, prodId) => {
        event.preventDefault();
        axios.delete('/api/products/' + prodId).then((products) => {
            getProducts();
        })
    }

    return (
        <div>
            <ProductList products={products} mode={'ADMIN'} deleteProduct={deleteProduct}/>
        </div>
    )
}

export default ManageProducts
