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
  const userPosts = await axios.get('https://fakestoreapi.com/products')
    console.log(userPosts)
    let products = userPosts.data;
    setData(products);  // set State
    let stringProducts = JSON.stringify(products);
    window.localStorage.setItem('products', stringProducts);

  
  } catch (err) {
    console.error(err.message);
  }
};
// const getData=()=>{
//   fetch('data.json'
//   ,{
//     headers : { 
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//      }
//   }
//   )
//     .then(function(response){
//       console.log(response)
//       return response.json();
//     })
//     .then(function(myJson) {
//       console.log(myJson);
//       setData(myJson)
//     });
// }
console.log(data)
  useEffect(()=>{
    // getData()
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
 let whatever = data[id]
 setCartItems(previtems =>[...previtems, whatever]);



  const exist = cartItems.find((x) => x.id === whatever.id);
  console.log(exist);
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

