import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

const pizzaList = (state = [], action) => {
    console.log('in pizzaList reducer');
    if(action.type === 'SET_PIZZA_LIST') {
        return action.payload; // data from DB
    }
    return state;
}

const shoppingCart = (state = [], action) => {
    console.log('in shoppingCart reducer');
    
    if(action.type === 'ADD_TO_CART') {
        return [...state, action.payload]
    } else if(action.type === 'REMOVE_FROM_CART') {
        for( let item of state) {
            if(item.id === action.payload) {
                return [...state].filter(item => item.id != action.payload);
            }
        }
    }
    return state;
}

const customerInfo = (state = [], action) => {
    console.log('in customerInfo reducer');
    
    if(action.type === 'ADD_CUSTOMER') {
        return [...state, action.payload]
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        pizzaList,
        shoppingCart,
        customerInfo,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
