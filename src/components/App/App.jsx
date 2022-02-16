import React from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from '../PizzaList/PizzaList';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Checkout from '../Checkout/Checkout';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      {/* <img src='images/pizza_photo.png' /> */}
      {/* <p>Pizza is great.</p> */}
      <section>
        <Router>
          <Route exact path="/"><PizzaList /></Route>
          <Route path="/customerInfo"><CustomerInfo /></Route>
          <Route path="/checkout"><Checkout /></Route>
        </Router>
      </section>
      
    </div>
  );
}

export default App;
