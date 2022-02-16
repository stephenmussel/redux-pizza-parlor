import { useEffect, useState } from 'react';
import axios from 'axios';
import PizzaItem from '../PizzaItem/PizzaItem';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function PizzaList() {

    const pizzaList = useSelector(store => store.pizzaList)

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        console.log('in useEffect');
        fetchPizza();
    }, [])

    const fetchPizza = () => {
        console.log('in fetchPizza');

        axios({
            method: 'GET',
            url: '/api/pizza',
        }).then(response => {
            console.log('getting pizza list: ', response.data);
            
            const action = { type: 'SET_PIZZA_LIST', payload: response.data}
            dispatch(action);
        }).catch(error => {
            console.log('error in fetching pizza list: ', error);
        });
    }

    const customerInfo = () => {
        console.log('clicked next');
        history.push('/customerInfo');
    }

    return(
        <>
            <h2>Step 1: Select Your Pizza</h2>
            {/* {JSON.stringify(pizzaList)} */}
            {pizzaList.map(pizza => 
                <div key={pizza.id}>
                    <PizzaItem
                        pizza={pizza}
                    />
                </div>
            )}
            <br /><br />
            <button onClick={customerInfo}>Next</button>
        </>
    )
}

export default PizzaList;