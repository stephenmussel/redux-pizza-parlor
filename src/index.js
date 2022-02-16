import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

const pizzaList = (state = [], action) => {
    console.log('in pizzaList reducer');
    return state;
}

const shoppingCart = (state = [], action) => {
    console.log('in shoppingCart reducer');
    
    if(action.type === 'ADD_TO_CART') {
        return [...state, action.payload]
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        pizzaList,
        shoppingCart,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
