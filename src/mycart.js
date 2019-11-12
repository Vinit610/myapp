import React,{useState,useContext} from 'react';
import {OrderContext} from './OrderContext';
import Order from './Order';

export const Mycart = () => {
    const [order,SetOrder] = useContext(OrderContext)
    return (
       <div>
           {order.map(order =>(
             <Order name = {order.name} quan = {order.Quantity} price = {order.price}/>
           ))}
       </div>
    )
}

export default Mycart;