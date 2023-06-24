//import * as React from "react"
import React, {useState} from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Sidebar({shoppingCart, quantity, products, setShoppingCart, totalPrice}) {

  //sidebar state initially set to false since want bar to be closed
  const [sideBar, setSideBar] = useState(false)
  const [checkout, setCheckout] = useState(false)

  const handleToggleButton = () =>{
    setSideBar((sideBar)=> !sideBar)
   
  }
  const handleReceiptBtn = () =>{

    setShoppingCart(shoppingCart = [])
    setCheckout(true)
    
  }


  return (
    
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
      {sideBar && <ShoppingCart  shoppingCart ={shoppingCart} quantity={quantity} products ={products} totalPrice ={totalPrice}/>}

      
    {sideBar && 
      <div class="checkout-form">
      <i class="material-icons md-48">monetization_on</i>
        <h3 class="">Payment Info 
          <span class="button">
         
          </span>
        </h3>
        
        <div class="input-field">
          <label class="label">Name</label>
            <div class="control ">
              <input name="name" class="checkout-form-input" type="text" placeholder="Student Name"></input>
              </div>
            </div>
            
        <div class="input-field">
          <label class="label">Email</label>
            <div class="control"><input name="email" class="checkout-form-input" type="email" placeholder="student@codepath.org"></input>
            </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox"><input name="termsAndConditions" type="checkbox"/>
              <span class="label">I agree to the <a href="#terms-and-conditions">terms and conditions</a>
              </span>
            </label>
          </div>
        </div>
        
        <p class="is-danger"></p>
        
        <div class="field">
          <div class="control">
            <button class="button checkout-button" onClick={handleReceiptBtn}>Checkout</button>
            <br/>
            <br/>
            <br/>
            {checkout && <p className="receipt">Success</p>}
            </div>
          </div>
        </div>

      }
    </section>

    
  );
}



