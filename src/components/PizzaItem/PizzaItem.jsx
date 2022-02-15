function PizzaItem({pizza}) {
    return(
        <>
            <h4>{pizza.name}</h4>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <button>Add</button>
        </>
    )
}

export default PizzaItem;