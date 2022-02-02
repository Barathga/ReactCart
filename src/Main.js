import React from "react";
export default function Main(props) {

    const {cartItems,onAdd,onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c)=>a+c.price * c.qty , 0);
    
    console.log(itemsPrice)
    const taxPrice = itemsPrice * 0.14;
    const discountPrice = itemsPrice>2000 ? 0:50;
    const totalPrice = itemsPrice + taxPrice + discountPrice;
    return(
        <div className="final">
    <aside className = " text-center ">
    <h2>
        Cart Items
    </h2>
    <div>
        {cartItems.length==0 &&<div>Cart Is Empty</div>}
    </div>
    {cartItems.map((item)=>(
    <div key={item.id} >
   <div>{item.name}</div>
   <div>
   <button onClick={()=>onAdd(item)}>+</button>
   <button onClick={()=>onRemove(item)}>-</button>
   
   

   </div>
   <div>
     {item.price} * {item.qty}
   </div>

    </div>
    



    ))}

    {cartItems.length!==0 &&(

        <>
       <hr></hr>
       <div>
           <div>Items Price</div>
           <div>${itemsPrice}</div>
       </div>
       <div>
           <div>GST</div>
           <div>${taxPrice.toFixed(2)}</div>
       </div>
       <div>
           <div>DISCOUNT IF ABOVE $2000</div>
           <div>${discountPrice.toFixed(2)}</div>
       </div>
       <div>
           <div>Total Price</div>
           <div>${totalPrice.toFixed(2)}</div>
       </div>

        </>
    )}
    </aside>
    </div>



    )
    
}