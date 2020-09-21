import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import AddProductForm from './components/products/AddProductForm';
import ProductDetails from './components/products/ProductDetails';
import ProductList from './components/products/ProductList';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/products">
                <Header/>
                <ProductList mode={'USER'}/>
            </Route>
            <Route path="/product-details/:id">
                <Header/>
                <ProductDetails/>
            </Route>
            <Route path="/cart">
                <Header/>
                <ProductList/>
            </Route>
            <Route path="/orders">
                <Header/>
                <ProductList/>
            </Route>
            <Route path="/add-product">
                <Header/>
                <AddProductForm/>
            </Route>
            <Route path="/manage-product">
                <Header/>
                <ProductList mode={'ADMIN'}/>
            </Route>
            <Route path="/">
                <Header/>
                <ProductList/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
