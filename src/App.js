import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import AddProductForm from './components/products/AddProductForm';
import Cart from './components/cart/Cart';
import ProductDetails from './components/products/ProductDetails';
import ManageProducts from './components/products/ManageProducts';
import Shop from './components/products/Shop';
import OrderList from './components/order/OrderList';
import LoginForm from './components/login/LoginForm';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/products">
                <Header/>
                <Shop/>
            </Route>
            <Route path="/product-details/:id">
                <Header/>
                <ProductDetails/>
            </Route>
            <Route path="/cart">
                <Header/>
                <Cart/>
            </Route>
            <Route path="/orders">
                <Header/>
                <OrderList/>
            </Route>
            <Route path="/add-product/:id">
                <Header/>
                <AddProductForm/>
            </Route>
            <Route path="/add-product">
                <Header/>
                <AddProductForm/>
            </Route>
            <Route path="/manage-products">
                <Header/>
                <ManageProducts/>
            </Route>
            <Route path="/login">
                <Header/>
                <LoginForm/>
            </Route>
            <Route path="/">
                <Header/>
                <Shop/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
