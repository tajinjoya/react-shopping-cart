import React, {useState, createContext, useEffect} from 'react';
import axios from 'axios';
export const ShoppingContext = createContext({});

let localCart = window.localStorage.getItem('cartItems');

export const ShoppingProvider = (props) => {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);


 useEffect(()=>{
   console.log('-------------------------------------------');
  localCart = JSON.parse(localCart);
  if (localCart) setCartItems(localCart)
 }, []);

 const getPosts = async () => {
  try {
  const userPosts = await axios.get("https://fakestoreapi.com/products")
    
    let products = userPosts.data;
    setData(products);  // set State
    let stringProducts = JSON.stringify(products);
    window.localStorage.setItem('products', stringProducts);

  
  } catch (err) {
    console.error(err.message);
  }
};
  
  useEffect(()=>{
    
    getPosts()
    // const interval=setInterval(()=>{
    //   getPosts()
    //  },10000)
       
       
    //  return()=>clearInterval(interval)
},[]) 

const getProduct = (id) => {
  let localProducts = window.localStorage.getItem('products');
  localProducts = JSON.parse(localProducts);

  // console.log(id)
  // console.log(localProducts)
  let whatever = localProducts[id]
  // console.log(whatever)
  return whatever;

}

const onAdd = (id) => {
// console.log(id)
// console.log(data)
//  let whatever = data.filter(ele => ele.id == id);
 let whatever = data[id]
//  console.log(whatever)
 setCartItems(previtems =>[...previtems, whatever]);
//  console.log(cartItems)


  const exist = cartItems.find((x) => x.id === whatever.id);
 
  let cartItemsCopy = [...cartItems];
  if (exist) {
    cartItemsCopy =
      cartItems.map((x) =>
        x.id === whatever.id ? { ...exist, qty: exist.qty + 1 } : x
      );
  } else {
    cartItemsCopy = [...cartItems, { ...whatever, qty: 1 }];
  }
  setCartItems(cartItemsCopy);
  let stringCartItems = JSON.stringify(cartItemsCopy);
  window.localStorage.setItem('cartItems', stringCartItems);
};

 const removeItem = (id) =>{
  const items = cartItems.filter(item => item.id !== id);

  setCartItems(items);
  window.localStorage.removeItem('cartItems');
}






  return(
    <ShoppingContext.Provider value={{data, setData, cartItems, setCartItems, onAdd, getProduct, removeItem}}>
      {props.children}
    </ShoppingContext.Provider>
  );
}

