import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ShoppingProvider} from './ShoppingContext';
import Product from './Product';
import Cart from './cart';
import ProductDetails from './ProductDetails';
import './App.css';


 
const App = () => {
 
  return (
  
   <ShoppingProvider>
   <div className="App">
   <Router>
   
   <Switch>

    <Route exact path="/" component={Product} />
  
    <Route path="/cart/:id" component={ProductDetails} />
    <Route path="/cart" component={Cart}/>
    </Switch>
    </Router>
    </div>
    </ShoppingProvider>
   
 
    

  );
}
 
export default App;
