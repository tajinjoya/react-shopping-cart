import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { useParams,Link } from 'react-router-dom';
import './cartList.css';
// import Button from '@material-ui/core/Button';
import img from './img/delete.png';
import FormSelect from './FormSelect';
import CheckOut from './CheckOut';





const CartList = (props) =>{
  let subTotal = [];
  for (let [index, entry] of props.cartData.entries()) {
    subTotal.push((entry.price) * (entry.qty));
  }
  console.log(subTotal);
  console.log(props.cartData);

  let tempTotal = subTotal.reduce((ac, cv)=> ac + cv,0);

  const [total, setTotal] = useState(tempTotal);
  const [cartData, setCartData] = useState(props.cartData);

  const [qtyArray, setQtyArray] = useState([]);


  useEffect(() => {
  console.log('????????????????????????????????')
  let cartItems = window.localStorage.getItem('cartItems');
    let localcartItems = JSON.parse(cartItems);
     let qtyArray = [];
     for (let [index, entry] of localcartItems.entries()) {
      qtyArray.push(entry.qty);
    }
    console.log(qtyArray);
    setQtyArray(qtyArray);

    }, [])



  function updateFinalItems(index, qty){
    console.log(index);
    qtyArray[index] = qty*1;
    console.log(qtyArray);
    let cartDataCopy = [...props.cartData];
    let stringcartData = JSON.stringify(cartDataCopy);
    window.localStorage.setItem('cartItems', stringcartData);
   
    setTotalValue();
  }
  console.log(props.cartData);
  

  // useEffect(() => {
  // let cartDataCopy = [...props.cartData];
  // let stringcartData = JSON.stringify(cartDataCopy);
  // window.localStorage.setItem('cartItems', stringcartData);
  
  //     }, [])

  function setTotalValue() {
    let subTotal = [];
     for (let [index, entry] of props.cartData.entries()) {
       subTotal.push((entry.price) * qtyArray[index]);
     }
     console.log(subTotal);
     let newTotal = subTotal.reduce((ac, cv)=> ac + cv,0);
     setTotal(newTotal);
     console.log("New total: " + newTotal);
   };

  // function updateQty(index, qty) {
  //   //console.log(index);
  //   //console.log(qty);
  //   console.log("productQty[index]" + productQty[index])
  //   console.log("[index]" + index)
  //   console.log("productQty inside the updateQty function" + productQty)
  //   productQty[index] = qty;
  //   setTotalValue();
  // };


  // let productQty = props.cartData.map((ele, i)=> ele.qty);//need to know qty
  // console.log(productQty);
  let finalData = props.cartData;
  //    console.log(productQty);
  

  


  // // let total = 0;
  // console.log(props.cartData);



 

/*
const subTotal = []
 for (const [index, value] of props.cartData.entries()) {
  //  subTotal.push((value.price) * (proQty*1))
 }
 let total = subTotal.reduce((ac, cv)=> ac +cv,0)
 */


 console.log(total)
//  console.log(finalData.map(ele => ele.id));


//  let localFinalQty = localStorage.getItem('finalQty');
//  localFinalQty = JSON.parse(localFinalQty);
//  console.log(localFinalQty);


  return (
    <div className="flex-container">
    
    <div className="flex-child left-child">
    <div className="cartList-header"><h1>Shopping bag</h1></div>
    <ul className="main--ul">
    {props.cartData.length === 0 ? <h1>YOUR SHOPPING BAG IS EMPTY!</h1> : props.cartData.map((value, index) => (
        <li className="cart--list" key={index} >
        <div className="cart--image">
          <Link to={`/${value.id - 1}`}><img className="cart--image--image" src={value.image} alt=""/></Link>
        </div >
        <FormSelect index={index} id={value.id} productQty={value.qty}  price={value.price} title={value.title}  updateFinalItems={updateFinalItems} />
        <div className="removeIcon-div">
          <button className="removeIcon btn" onClick={() => props.remove(value.id)}><img src={img} alt=""/></button>
        </div>
        </li>
    ))}
      </ul>
      </div>
      <div className="flex-child right-child">
      <CheckOut total={total}/>
      </div>
      </div>
     
      
  
  )
}

export default CartList;