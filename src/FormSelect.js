import React,{useState} from 'react';

function FormSelect(props) {
  console.log("props.index in FormSelect.js "+props.index);

  const [proQty,setProQty] = useState(props.productQty);


 function handleChange(e){
   setProQty(e.target.value);
    console.log(proQty);
   
 };

  function handleSubmit(e){
    e.preventDefault();
    console.log("proQty phase1 " + proQty);
    props.updateQty(props.index, proQty);
    console.log("proQty phase2 " + proQty);
    props.setTotalValue();
  };

  console.log(proQty);

    return (
      <form onSubmit={handleSubmit}>
        <h2>Choose Quantity</h2>
        <select onChange={handleChange} value={proQty}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button type="submit">Submit</button>
        <p>{proQty} X {props.title}</p>
        <p>{proQty} X {props.price}</p>
        <p>{(proQty  * props.price).toFixed(2)}  </p>
      </form> 
      
    );
}

export default FormSelect;
