import './App.css';
import Navbar from './Navbar'



import Data from "./Data.js";

import { useState } from 'react';



function App() {
  const {product} = Data;
  const [cartItems,setCartItems] = useState([]);
  const onAdd = (product) =>
  {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist)
    {
      setCartItems(cartItems.map(x =>x.id === product.id ? {...exist, qty:exist.qty+1}:x  ))
    }else{
      setCartItems([...cartItems , {...product , qty:1}])
    }
  }
  const onRemove =(product)=>
  {
    const exist = cartItems.find((x)=>x.id===product.id);
    if(exist.qty===1)
    {
       setCartItems(cartItems.filter((x)=>x.id!==product.id))
    }else{
      setCartItems(cartItems.map(x =>x.id === product.id ? {...exist, qty:exist.qty-1}:x  ))
    }
  }
  return (
    <div className='App'>
      <Navbar countCartItems={cartItems.length}  onAdd={onAdd}  onRemove={onRemove} product={product} cartItems={cartItems}> </Navbar>
      
      
      
      
  
     
      
    </div>
  );
}
export default App;

