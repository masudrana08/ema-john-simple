import React from 'react';
import './Cart.css'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Header from '../Header/Header';
import Review from '../Review/Review';
import Shop from '../Shop/Shop';

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
        <BrowserRouter>
       
            <div>
        <div className="cart">
            <h3>Order Summary</h3>
            <h4>Total Order : {props.cart.length}</h4>
            
            <h4>Shipping Cost : {shippingCost}$ </h4>
            <h3 className="total-cost">Total Cost : {(totalCost+shippingCost).toFixed(2)}$ </h3>
            <Link exact to="/review">
                 <button className="order-review-button">Review your order</button>
            </Link>
             
             </div>  
        </div>
        </BrowserRouter>
        
   
        
    );
};

export default Cart;