import React,{useState, createContext} from 'react';

export const OrderContext = createContext();

export const OrderProvider = (props) => {
    const [order, setOrder] = useState([
        {
            name : 'Plain Dosa',
            Quantity : 3,
            price : 67
        }
    ]);
    return (
        <OrderContext.Provider value = {[order,setOrder]}>
            {props.children}
        </OrderContext.Provider>
    )
}