import React from "react";
import fakeData from "../../fakeData";
import './Shop.css'
import Product from "../Product/Product";
const Shop = () => {
  const product10 = fakeData.slice(0, 10);

  return (
    <div className="shop-container">
          <div className="product-container">
            {
                product10.map(product=>{
                    return(
                    <Product key={product.key} product={product}></Product>
                    )
                })
            }
          </div>
          <div className="cart-container">
            <h3>I am cart</h3>
          </div>
    </div>
  );
};

export default Shop;
