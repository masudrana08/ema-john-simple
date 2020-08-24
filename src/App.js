import React, { useReducer, useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Review from './Components/Review/Review';
import Cart from "./Components/Cart/Cart"




function App(){
  // const style={
  //   fontWeight:"bold",
  //   color:"gray"

  // }
  return(
    
      <div>
        <Header/>
        <BrowserRouter>
        
          <Route exact path="/" component={Shop}/>
          <Route exact path="/review" component={Review}/>
        </BrowserRouter>
      </div>
  )
}
export default App;
