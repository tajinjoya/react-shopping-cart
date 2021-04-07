import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {ShoppingProvider} from './ShoppingContext';
import Product from './Product';
import Cart from './cart';
import './App.css';


 
const App = () => {
 
  return (
  
   <ShoppingProvider>
   <div className="App">
   <Router>
   
    <Route  path="/" component={Product} exact/>
    <Route path="/cart" component={Cart} exact/>
  
    </Router>
    </div>
    </ShoppingProvider>
   
 
    

  );
}
 
export default App;
