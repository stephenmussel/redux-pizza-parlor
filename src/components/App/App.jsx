import React from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from '../PizzaList/PizzaList';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Checkout from '../Checkout/Checkout';
import Header from '../Header/Header';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Header />
  
      {/* <img src='images/pizza_photo.png' /> */}
      {/* <p>Pizza is great.</p> */}
        <Router>
          <Route exact path="/"><PizzaList /></Route>
          <Route path="/customerInfo"><CustomerInfo /></Route>
          <Route path="/checkout"><Checkout /></Route>
        </Router>
      
    </div>
  );
}

export default App;
