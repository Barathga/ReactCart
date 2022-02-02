import React from 'react';
import image from './cart.png'
import Main from "./Main";
import Bottom from './down'
import Body from './Body'
import Card from './Card';



function Navbar(props){
 const {countCartItems , onAdd , onRemove , cartItems,product} = props;
 const[render , Render] = React.useState(false );
 const[render1 , setRender1] = React.useState(true);
 const[render2 , setRender2] = React.useState(true);
    return(
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">All products</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">popular items</a></li>
            <li><a className="dropdown-item" href="#">New Arrivals</a></li>
          </ul>
        </li>
      </ul>
      <nav className="d-flex">
      <a href="#middle">
        
        <button onClick={()=>[Render(!render),setRender1(!render1),setRender2(!render2)  ]} href="#bottom"  className="btn btn-outline-success" type="submit"><img className='comp ' src={image}></img> &nbsp;Cart &nbsp; &nbsp; {countCartItems}</button>
        </a>
  
   
     
     
       
      </nav>
    </div>
  </div>
 
</nav>



{render1?<Body></Body>:<></>}
{render1?<Card onAdd={onAdd}  onRemove={onRemove} product={product} cartItems={cartItems}></Card>:<></>}
{render?<Main onAdd={onAdd}  onRemove={onRemove} cartItems={cartItems}></Main>:<></>}
{render1?<Bottom></Bottom>:<></>}
</>
    )
}
export default Navbar;