import React from 'react'
import { useParams,Link } from 'react-router-dom';








const CartList = (props) =>{
  const {id} = useParams();
  console.log(id)
//  let singlePic = props.picItems.map((ele,i)=> ele)
console.log(props.cartData[0])
console.log(props)

//  console.log(singlePic[id]);

 
  return (

    <ul className="product-card">
    <li value={id}>
    {/* {props.cartData.map(ele => (<img src={ele} alt=""/>))} */}
      {props.cartData.map(ele => (<h3>{ele.title}</h3>))}

     
      </li> 
   
      </ul>
      
  
  )
}

export default CartList;