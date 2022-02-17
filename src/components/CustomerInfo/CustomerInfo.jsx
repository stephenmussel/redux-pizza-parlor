import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function CustomerInfo() {

    const defaultCustomer = {
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        orderType: 'true' // sets as default to delivery
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
                    value={newCustomer.state}
                    onChange={(event) => setNewCustomer({...newCustomer, state: event.target.value})}
                    type="text" 
                    placeholder="state"
                /><br /><br />
                <input 
                    required 
                    value={newCustomer.zip}
                    onChange={(event) => setNewCustomer({...newCustomer, zip: event.target.value})}
                    type="number" 
                    placeholder="zip"
                /><br /><br />

                Is this order for <b>Delivery</b> or <b>Pickup</b>?<br /><br />

                <label>
                    <input 
                        type="radio"
                        name="orderType"
                        value="true"
                        onChange={(event) => setNewCustomer({...newCustomer, orderType: event.target.value})}
                        checked={newCustomer.orderType === "true"}
                    />
                    Delivery
                </label>
                <label>
                    <input 
                        type="radio"
                        name="orderType" // names must be the same to only allow one radio selection
                        value="false"
                        onChange={(event) => setNewCustomer({...newCustomer, orderType: event.target.value})}
                        checked={newCustomer.orderType === "false"}
                    />
                    Pickup
                </label>
                <br /><br />
                <button onClick={checkout}>Next</button>
            </form>
        </>
    )
}

export default CustomerInfo;