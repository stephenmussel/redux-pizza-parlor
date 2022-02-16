import { useSelector } from 'react-redux'

function Checkout() {

    const shoppingCart = useSelector(store => store.shoppingCart)
    const customerInfo = useSelector(store => store.customerInfo)


    return(
        <>
            <h2>Step 3: Checkout</h2>
            <h4>this is customer info:</h4>
            {JSON.stringify(customerInfo)}
            <h4>this is shopping cart:</h4>
            {JSON.stringify(shoppingCart)}

        </>
    )
}

export default Checkout;