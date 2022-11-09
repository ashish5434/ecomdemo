import React from 'react'
import {Link} from 'react-router-dom'



const Cart = (props) => {
   
  return (
   <>
        <Link to ="/cart">     <img src="cart.png" width={"50px"} height={"50px"}/> <span>{props.cart.length}</span></Link>

   </>
  )
}

export default Cart