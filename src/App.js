import React,{useState} from 'react';
import './App.css';
import Southindian from'./south-indian'
import {OrderProvider} from './OrderContext'
import MyCart from './mycart'
const App = () => {
  const [name, setName] = useState('');
  const [price, setPrice]= useState('');
  const movies = [
    {
      name: 'ABCD1',
      price: 100
    },
    {
      name: 'ABCD2',
      price: 200
    }
  ];
  const updateName = e => {
    setName(e.target.value)
  }
  const updatePrice = e =>{
    setPrice(e.target.value)
  }
  const addMovies = (e) =>{
   {console.log(e.target)}
  }
  return (
    <OrderProvider>
      <div className="App">
        <Southindian/>
      </div>
    </OrderProvider>
  );
}

export default App;
