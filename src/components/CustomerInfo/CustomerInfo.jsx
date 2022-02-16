function CustomerInfo() {
    return(
        <>
            <h2>Step 2: Customer Information</h2>
            <form>
                <input 
                    required 
                    type="text" 
                    placeholder="name"
                /><br /><br />
                <input 
                    required 
                    type="text" 
                    placeholder="street address"
                /><br /><br />
                <input 
                    required 
                    type="text" 
                    placeholder="city"
                /><br /><br />
                <input 
                    required 
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
            </form>
        </>
    )
}

export default CustomerInfo;