import React from 'react';
import ReviewedItem from './ReviewedItem';
import Cart from '../Cart/Cart';
import './Review.css'
const Review = (props) => {
    return (
            <div className="review-page"> 
                <div>
                {
                    props.reviewProduct.map(product=>{
                        return(
                            <ReviewedItem key={product.key} product={product}></ReviewedItem>
                        )
                        
                    })
                }
                </div>
                <div>
                    {/* <Cart></Cart> */}
                </div>
            </div>
    );
};

export default Review;