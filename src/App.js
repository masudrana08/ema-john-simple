import React, { useReducer, useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Review from './Components/Review/Review';
import Cart from "./Components/Cart/Cart"




function App(){
const [reviewProduct, setReviewProduct]=useState([])

  function reviewHandler(props){
  setReviewProduct(props)
 
  }

  // const style={
  //   fontWeight:"bold",
  //   color:"gray"

  // }
  return(
    
      <div>
        <Header/>
        <BrowserRouter>
       
          <Route exact path="/">
            <Shop reviewHandler={reviewHandler}></Shop>
          </Route>
          
          <Route path="/review" >
            <Review reviewProduct={reviewProduct}></Review>
          </Route>
        </BrowserRouter>
      </div>
  )
}
export default App;
