import React from 'react'


const Order = ({name, quan, price}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{quan}</p>
            <p>{price}</p>
        </div>
    )
}
export default Order;