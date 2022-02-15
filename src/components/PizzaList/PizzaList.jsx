import { useEffect, useState } from 'react';
import axios from 'axios';

function PizzaList() {

    const [pizzaList, setPizzaList] = useState([]);

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
            setPizzaList(response.data);
        }).catch(error => {
            console.log('error in fetching pizza list: ', error);
        });
    }

    return(
        <>
            <h2>Step 1: Select Your Pizza</h2>
            {/* {JSON.stringify(pizzaList)} */}
            {pizzaList.map(pizza => 
                <div>
                    <h4>{pizza.name}</h4>
                    <p>{pizza.description}</p>
                    <p>{pizza.price}</p>
                    <button>Add</button>
                </div>
            )}
        </>
    )
}

export default PizzaList;