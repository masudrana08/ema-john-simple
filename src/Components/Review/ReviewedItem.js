import React from 'react';
import './Review.css'
const ReviewedItem = (props) => {
    const {name,price,seller,img}=props.product
    return (
        <div className="reviewed-item">
                <h4 className="reviewed-item-name">{name}</h4> 
                <div className="reviewed-item-details">
                    <div>
                        <h3 className="reviewed-item-price">${price}</h3>
                        <p><small>sold by:{seller}</small></p>
                        <p>Quantity:1</p>
                        <button className="reviewed-item-remove">Remove</button>
                    </div>
                    <div className="reviewed-item-image">
                        <img src={img} alt=""/>
                    </div>
                </div>
            </div>
    );
};

export default ReviewedItem;