import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function CustomerInfo() {

    const defaultCustomer = {
        name: '',
        address: '',
        city: '',
        zip: '',
        // orderType: false
    }

    const [newCustomer, setNewCustomer] = useState(defaultCustomer);

    const history = useHistory();
    const dispatch = useDispatch();

    const checkout = (event) => {
        event.preventDefault();
        console.log('heading to checkout');
        console.log('this is newCustomer: ', newCustomer);

        const action = { type: 'ADD_CUSTOMER', payload: newCustomer}
        dispatch(action);
        history.push ('/checkout');
    }
    return(
        <>
            <h2>Step 2: Customer Information</h2>
            <form>
                <input 
                    required 
                    value={newCustomer.name}
                    onChange={(event) => setNewCustomer({...newCustomer, name: event.target.value})}
                    type="text" 
                    placeholder="name"
                /><br /><br />
                <input 
                    required 
                    value={newCustomer.address}
                    onChange={(event) => setNewCustomer({...newCustomer, address: event.target.value})}
                    type="text" 
                    placeholder="street address"
                /><br /><br />
                <input 
                    required 
                    value={newCustomer.city}
                    onChange={(event) => setNewCustomer({...newCustomer, city: event.target.value})}
                    type="text" 
                    placeholder="city"
                /><br /><br />
                <input 
                    required 
                    value={newCustomer.zip}
                    onChange={(event) => setNewCustomer({...newCustomer, zip: event.target.value})}
                    type="number" 
                    placeholder="zip"
                /><br /><br />

                Is this order for <b>Pickup</b> or <b>Delivery</b>?<br /><br />

                <label>
                    <input 
                        type="radio"
                    />
                    Pickup
                </label>
                <label>
                    <input 
                        type="radio"
                    />
                    Delivery
                </label>
                <br /><br />
                <button onClick={checkout}>Next</button>
            </form>
        </>
    )
}

export default CustomerInfo;