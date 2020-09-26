import React, {useEffect,useState} from 'react'
import axios from '../../axiosConfig'; 
import Order from './Order';

function OrderList() {
    const [orders, setOrders] = useState([]);
    const [showContent, setShowContent] = useState(false);

    const getOrders = () => {
        axios.get('/api/orders').then((orders) => {
            setOrders(orders.data);
            setShowContent(true);
        })
    }

    useEffect(() =>{
        getOrders();
    }, []);

    let orderListContent;

    if (showContent) {
        if (orders.length > 0) {
            orderListContent = orders.map(order => {
                return <Order key={order._id} order={order}/> 
            });
        } else {
            orderListContent = <div className='empty-list'>Brak zamówien</div>
        }
    }

    return (
        <div className="order-list">
            {orderListContent}
        </div>
    )
}

export default OrderList
