import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
   
    const {name,img,seller,price,stock,url}=props.product
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt=""/>
            </div>

            <div className="product-details">
                <a target="_blank" href={url}><h4>{name}</h4></a>
                <p>by: {seller}</p>
                <p>${price}</p> <br/>
                <p>only {stock} left in stoke</p>
                <button onClick={()=>props.handleAddCart(props.product)} className="cart-button">
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>  add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;