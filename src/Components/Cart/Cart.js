import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const totalCost=props.cart.reduce((total,item)=>total+item.price,0);
    let shippingCost=0;
  if(totalCost>50){
      shippingCost=0
  }else if(totalCost>15){
      shippingCost=4
  }else if(totalCost>0){
      shippingCost=12
  }
    
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <h4>Total order : {props.cart.length}$</h4>
            
            <h4>Shipping Cost : {shippingCost}$ </h4>
            <h3 className="total-cost">Total Cost : {(totalCost+shippingCost).toFixed(2)}$ </h3>


            
        </div>
    );
};

export default Cart;