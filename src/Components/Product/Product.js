import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props);
    const {name,img,seller,price,stock}=props.product
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt=""/>
            </div>

            <div className="product-details">
                <h4>{name}</h4>
                <p>by: {seller}</p>
                <p>${price}</p> <br/>
                <p>only {stock} left in stoke</p>
            </div>
        </div>
    );
};

export default Product;