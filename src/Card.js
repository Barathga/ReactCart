import React from "react";
import Data from "./Data.js";


function Card(props) {
  const {i , onAdd,cartItems,onRemove} = props;
  const arr = [];
  
  return (
    <div className="container mt-5 mb-5">
      <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        
      {Data.product.map((i) => (
       
          <div className="col mb-5" key={i.id}>
         
          <div className="card h-100">
            <img src={i.image.pic} alt="..."  />
            <div className="card-body text-center">
              <h5 className="card-title">{i.name}</h5>
              <p>⭐️⭐️⭐️⭐️</p>
              <p>${i.price}</p>
            
           <button onClick={()=>onAdd(i)}>
               Add to cart    
               {console.log(arr.length)}
              
               </button>
               {}
               &nbsp;&nbsp;<button onClick={()=>onRemove(i)}>
             Remove from cart
               </button>
             
             
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
    
  );
}

export default Card;
