import { useSelector } from 'react-redux';
import React from 'react';
import { useEffect, useState } from 'react';

function CartTotal() {

    const [newTotal, setNewTotal] = useState(0);

    useEffect(() => {
        console.log('in useEffect');
        updateCartTotal();
    }, [])

    const updateCartTotal = () => {
        console.log('in updateCartTotal');

        let total = 0; // empty cart
        for(let item of shoppingCart) {
            total += Number(item.price)
        }
        console.log(`cart total is $${total}`);
        setNewTotal(total);
    }

    const shoppingCart = useSelector(store => store.shoppingCart)

    return(
        <>
            <h2>cart total: ${newTotal}</h2>
        </>
    )
}

export default CartTotal;