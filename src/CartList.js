import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { useParams,Link } from 'react-router-dom';
import './cartList.css';
import Button from '@material-ui/core/Button';
import img from './img/delete.png';
import FormSelect from './FormSelect';




const CartList = (props) =>{
  let subTotal = [];
  for (let [index, entry] of props.cartData.entries()) {
    subTotal.push((entry.price) * (entry.qty));
  }
  console.log(subTotal);
  let tempTotal = subTotal.reduce((ac, cv)=> ac + cv,0);

  const [total, setTotal] = useState(tempTotal);
  function updateQty(index, qty) {
    //console.log(index);
    //console.log(qty);
    console.log("productQty[index]" + productQty[index])
    console.log("[index]" + index)
    console.log("productQty inside the updateQty function" + productQty)
    productQty[index] = qty;
    setTotalValue();
  };
  let productQty = props.cartData.map((ele, i)=> ele.qty);//need to know qty
  console.log(productQty);
  let finalData = props.cartData;
     console.log(productQty);
  

  function setTotalValue() {
   let subTotal = [];
    for (let [index, entry] of finalData.entries()) {
      subTotal.push((entry.price) * productQty[index]);
    }
    console.log(subTotal);
    setTotal(subTotal.reduce((ac, cv)=> ac + cv,0));
    console.log("New total: " + total);
    // return total;
  };

  // let total = 0;
  console.log(props.cartData);



  // setTotalValue();

/*

const subTotal = []

 for (const [index, value] of props.cartData.entries()) {
  //  subTotal.push((value.price) * (proQty*1))
 }

 let total = subTotal.reduce((ac, cv)=> ac +cv,0)
 */


 console.log(total)
 console.log(finalData.map(ele => ele.id));

  return (
    <div className="flex-container">
    <div className="flex-child left-child">
    <ul className="main--ul">
    {props.cartData.length === 0 ? <h3>Cart is empty</h3> : props.cartData.map((value, index) => (
        <li className="cart--list" key={index} >
         <button className="removeIcon" onClick={() => props.remove(value.id)}><img src={img} alt=""/></button>
                <div className="cart--image">
                <Link to={`/${value.id - 1}`}><img src={value.image} alt=""/>  </Link>
                   {/* <p>{value.qty} x {value.title}</p>
                   <p>SubTotal: {value.qty * value.price} kr.</p> */}
                   <FormSelect index={index} id={value.id} productQty={value.qty} formData={finalData} price={value.price} title={value.title} updateQty={updateQty} setTotalValue={setTotalValue}/>
                </div >
                </li>
              
           
                
    ))}

    
      </ul>
      </div>
      <div className="flex-child right-child">
        <div className="checkout-div">
      <div style={{ borderTop: "2px solid black", marginLeft: 20, marginRight: 20, marginTop:70}}></div>
      <div className="total"><p><strong>Total: {total.toFixed(2)} kr.</strong></p></div>
      <div className="proceed" ><Button variant="contained" color="primary">Proceed</Button></div>
      <div className="checkout-input"><input type="text" placeholder="email"/></div>
      <div className="checkout-input"><input type="text" placeholder="Name"/></div>
      <div className="checkout-input"><input type="text" placeholder="Address"/></div>
      <div className="checkout-button"><Button variant="contained" color="primary" onClick={()=>{alert('You have been checked out! Happy shopping!')}}>checkout</Button></div>
      </div>
      </div>
     
    
      
     
            </div>
     
      
  
  )
}

export default CartList;