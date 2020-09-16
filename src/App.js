import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import AddProductForm from './components/products/AddProductForm';
import ProductList from './components/products/ProductList';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/products">
                <Header/>
                <ProductList/>
            </Route>
            <Route path="/add-product">
                <Header/>
                <AddProductForm/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
