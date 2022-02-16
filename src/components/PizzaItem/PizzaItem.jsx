import { useState } from 'react';
import { useDispatch } from 'react-redux';

function PizzaItem({pizza}) {

    // TODO: conditionally render `remove` button

    const [pizzaSelected, setPizzaSelected] = useState(false);
    const dispatch = useDispatch();

    const selectPizza = () => {
        console.log('pizza selected: ', pizza.name); // logs pizza selected
        setPizzaSelected(true); // sets state of pizza selected

        const action = { type: 'ADD_TO_CART', payload: pizza }
        dispatch(action);
    }

    const handleRemove = (pizzaId) => {
        console.log('in handleRemove');
        console.log('pizza removed: ', pizza.name, 'with id: ', pizzaId);
        setPizzaSelected(false);

        const action = { type: 'REMOVE_FROM_CART', payload: pizzaId}
        dispatch(action);
    }

    return(
        <div>
        {pizzaSelected ? (
            <div key={pizza.id}>
                <h4>{pizza.name}</h4>
                <img width="200px" height="200px" src={pizza.image_path}/>
                <p>{pizza.description}</p>
                <p>${pizza.price}</p>
                <button onClick={() => handleRemove(pizza.id)}>Remove</button>
            </div>
        ) : (
            <div key={pizza.id}>
                <h4>{pizza.name}</h4>
                <img width="200px" height="200px" src={pizza.image_path}/>
                <p>{pizza.description}</p>
                <p>${pizza.price}</p>
                <button onClick={selectPizza}>Add</button>
            </div>
        )
        }
            
        </div>
    )
}

export default PizzaItem;