import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { useParams,Link } from 'react-router-dom';
import './cartList.css';
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

 
  let finalData = props.cartData;
 console.log(total)



  return (
    <div className="flex-container">
    
    <div className="left-child">
    <div className="cartList-header"><h1>Shopping bag</h1></div>
    {/* <ul className="main--ul">
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
      </ul> */}
<table>
<thead >
<tr className="cart--list-heading" ><th className="cart--data-product">Product</th>
<th className="cart--data-price">Price</th>
<th className="cart--data-total">Total</th>

</tr>
</thead>
<tbody>
      {props.cartData.length === 0 ? <h1>YOUR SHOPPING BAG IS EMPTY!</h1> : props.cartData.map((value, index) =>
      (
        <tr className="cart--list" key={index}>
       
        <td className="cart--data" >
        {/* <tr><p>{value.title}</p></tr> */}
          <div className="cart--image">
        
          <Link to={`/${value.id - 1}`}><img className="cart--image--image" src={value.image} alt=""/></Link>
          <div className="cart--title" ><p>{value.title}</p></div>
          </div >
          </td>
         
          <td className="cart--data">

            <tr><p className="price"><strong>{value.price} kr.</strong></p></tr>
          </td>
          <td className="cart--data-formselect"> 
          
            <FormSelect index={index} id={value.id} productQty={value.qty}  price={value.price} title={value.title}  updateFinalItems={updateFinalItems} />
          </td>
         {/* <td className="cart--data"> 
           <div className="removeIcon-div">
            <button className="removeIcon btn" onClick={() => props.remove(value.id)}><img src={img} alt=""/></button>
           </div>
          </td> */}
        </tr>))}
        </tbody>
        </table>
      </div>
      <div className="right-child">
      <CheckOut total={total}/>
      </div>
      </div>
     
      
  
  )
}

export default CartList;