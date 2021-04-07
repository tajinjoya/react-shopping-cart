import React, {useState, createContext, useEffect} from 'react';
import axios from 'axios';
export const ShoppingContext = createContext({});

export const ShoppingProvider = (props) => {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

 

 const getPosts = async () => {
  try {
  const userPosts = await axios.get("https://fakestoreapi.com/products")
    
    setData(userPosts.data);  // set State
  
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

const onAdd = (id) => {
console.log(id)
//  console.log(data)
 //let whatever = data.filter(ele => ele.id == id);
 let whatever = data[id]
//  console.log(whatever)
 setCartItems(previtems =>[...previtems, whatever]);


  const exist = cartItems.find((x) => x.id === whatever.id);
 
  if (exist) {
    console.log(exist)
    setCartItems(
      cartItems.map((x) =>
        x.id === whatever.id ? { ...exist, qty: exist.qty + 1 } : x
      )
    );
  } else {
    setCartItems([...cartItems, { ...whatever, qty: 1 }]);
  }
 
};




console.log(cartItems)


  return(
    <ShoppingContext.Provider value={{data, setData, cartItems, setCartItems, onAdd}}>
      {props.children}
    </ShoppingContext.Provider>
  );
}