import React,{useState, useContext, useEffect} from 'react';
import {ShoppingContext} from './ShoppingContext';
import './FormSelect.css';
import img from './img/delete.png';

function FormSelect(props) {
  const value = useContext(ShoppingContext);
  let arrayQty = value.cartItems.map(ele=> ele.qty);
  console.log(arrayQty)
  console.log("props.index in FormSelect.js "+props.index);

  const [proQty,setProQty] = useState(props.productQty);
  const [finalItems, setFinalItems] = useState(value.cartItems);
  // const [qtyArray, setQtyArray] = useState([]);

 function handleChange(e){
   console.log(e.target.value);
   console.log(props.id);
   setProQty(e.target.value);
    console.log(proQty);
 
 };

  function handleSubmit(e){
    e.preventDefault();
  
    console.log("proQty phase1 " + proQty);
    // props.updateQty(props.index, proQty);
    console.log("proQty phase2 " + proQty);
    console.log(props.id);
    setFinalItems(prevItems=>[...prevItems,
      ...value.cartItems.map(ele => ele.id === props.id ? ele.qty = proQty*1: 0)
     ]);
     console.log(finalItems);
    //  const totalArray = finalItems.map(ele => ele.qty);
    //  console.log(totalArray);

    props.updateFinalItems(props.index, proQty);
   
  };


  console.log(proQty);
  console.log(finalItems)
 
  const totalArray = finalItems.filter(ele => typeof ele === 'object').map(ele => ele.price * ele.qty)
  console.log(totalArray);
  let finalTotal = totalArray.reduce((ac, cv)=> ac +cv, 0);
  console.log(finalTotal)

    return (
   <div className="formselect-div">
      <form className="form-div" onSubmit={handleSubmit}>
      {/* <h3>{props.title}</h3>
      <p>{props.price.toFixed(2)} kr.</p> */}
   
        {/* <h2>Choose Quantity</h2> */}
        <select className="select" onChange={handleChange} value={proQty}>
          <option className="option" value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>
        <div>
        <button className="button-form" type="submit">Update Quantity</button>
        </div>
       
      </form> 
      <div className="removeIcon-div">
        <button className="removeIcon btn" onClick={() => value.removeItem(props.id)}><img src={img} alt=""/><span>Remove Item</span>
   </button>
      </div>
      <div className="cart-total">
        <p className="cart-total-text">{proQty}pcs: <strong> {(proQty  * props.price).toFixed(2)} kr.</strong></p>
      </div>
      </div>
  
      
    );
}

export default FormSelect;
