import React, {useState, useEffect} from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Sidebar({shoppingCart, quantity, products, setShoppingCart, totalPrice}) {

  //sidebar state initially set to false since want bar to be closed
  const [sideBar, setSideBar] = useState(false)
  const [checkout, setCheckout] = useState(false)
  const [subtotal, setSubTotal] = useState(0)
  const [taxes, setTaxes] = useState(0)
  const [total, setTotal] = useState(0)
  
  //event handeler for sidebar so when user clicks on arrow button sidebar state changes 
  const handleToggleButton = () =>{
    setSideBar((sideBar)=> !sideBar)
   
  }

  return (
    
    //ternary operator used on sidebar section to generate "open" vs "closed" sidebar function based on sideBar state
    <section className={`sidebar ${sideBar ? "open": "closed"}`}>
      <div className="wrapper">

        {/* toggle button  */}
        <button className="toggle-button button closed" onClick ={handleToggleButton}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <div className="shopping-cart">

        {!sideBar  && 
          <div className="cart-icons">

            {/* shopping cart icon */}
            <span className="cart-icon icon button">
              <i className="material-icons md-48">add_shopping_cart</i>
            </span>

            {/* monetization icon */}
            <span className="cart-icon icon button">
              <i className="material-icons md-48">monetization_on</i>
            </span>

            {/* fact check icon */}
            <span className="cart-icon icon button">
              <i className="material-icons md-48">fact_check</i>
            </span>
          </div> }
        </div> 

      </div>
      {sideBar && <ShoppingCart  
      shoppingCart ={shoppingCart} 
      quantity={quantity} 
      products ={products} 
      totalPrice ={totalPrice}
      subtotal = {subtotal}
      setSubTotal = {setSubTotal}
      taxes ={taxes}
      setTaxes = {setTaxes}
      total = {total}
      setTotal = {setTotal}
      setShoppingCart = {setShoppingCart}
      checkout = {checkout}
     setCheckout = {setCheckout}
      />}

   
    </section>  
    
  );
}



