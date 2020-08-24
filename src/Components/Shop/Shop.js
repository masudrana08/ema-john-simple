import React, { useState } from "react";
import fakeData from "../../fakeData";
import './Shop.css'
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { BrowserRouter, Route } from "react-router-dom";
import Review from "../Review/Review";
const Shop = (props) => {

  const product10 = fakeData.slice(0, 10);
  const [product,setProduct]=useState(product10)
  const [cart,setCart]=useState([])

  function handleAddCart(cartProduct){
    const newProduct=[...cart,cartProduct];
    setCart(newProduct)

  }
  return (
 
      <div className="shop-container">
          <div className="product-container">
            {
                product.map(product=>{
                    return(

                    <Product 
                     key={product.key} 
                      product={product}
                      handleAddCart={handleAddCart}
                    ></Product>
                    )
                })
            }
          </div>
          <div className="cart-container">
            <Cart cart={cart}></Cart>
          </div>
          {
            props.reviewHandler(cart)
          }

          
    </div>
  );
};

export default Shop;
