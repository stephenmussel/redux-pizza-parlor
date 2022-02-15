import { useEffect } from 'react';
import axios from 'axios';

function PizzaList() {

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
        }).catch(error => {
            console.log('error in fetching pizza list: ', error);
        });
    }

    return(
        <>
            <h3>Step 1: Select Your Pizza</h3>
            <p>pizza list goes here...</p>
        </>
    )
}

export default PizzaList;