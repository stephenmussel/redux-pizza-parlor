import { useSelector } from 'react-redux';
import CartTotal from '../CartTotal/CartTotal';

function Checkout() {

    // TODO: display orderType
    // TODO: display cart total

    const shoppingCart = useSelector(store => store.shoppingCart)
    const customerInfo = useSelector(store => store.customerInfo)

    return(
        <>
            <h2>Step 3: Checkout</h2>
            <h4>customer info:</h4>
            {/* {JSON.stringify(customerInfo)} */}
            {customerInfo.map(customer =>
                <div key={customer.id}>
                    <p>{customer.name}</p>
                    <p>{customer.address}</p>
                    <p>{customer.city}, {customer.zip}</p>
                    <p>{customer.orderType}</p>
                </div> 
            )}
            <h4>order:</h4>
            {/* {JSON.stringify(shoppingCart)} */}
            {shoppingCart.map(item =>
            <>
                <div>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                </div> 
            </>
            )}
            <CartTotal />
        </>
    )
}

export default Checkout;