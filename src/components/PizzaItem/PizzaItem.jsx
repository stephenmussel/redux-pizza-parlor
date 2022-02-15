import { useState } from 'react';
import { useDispatch } from 'react-redux';

function PizzaItem({pizza}) {

    const [pizzaSelected, setPizzaSelected] = useState(false);
    const dispatch = useDispatch();

    const selectPizza = () => {
        console.log('pizza selected: ', pizza.name); // logs pizza selected
        setPizzaSelected(true); // sets state of pizza selected

        const action = { type: 'ADD_TO_CART', payload: pizza.name }
        dispatch(action);
    }

    return(
        <>
            <h4>{pizza.name}</h4>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <button onClick={selectPizza}>Add</button>
        </>
    )
}

export default PizzaItem;