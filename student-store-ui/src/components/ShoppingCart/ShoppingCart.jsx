import React,{useState} from "react"
import "./ShoppingCart.css"
import Singlecartrow from "../SingleCartRow/SingleCartRow"

export default function ShoppingCart({shoppingCart, quantity, products, totalPrice}){
   
    console.log("shopping cart in shoppingCart function: ", shoppingCart)
    //console.log(products)
    return(
        <>
        {!shoppingCart.length ? <p nameClass="initialState">No items added to cart yet. Start shopping now!</p> : 
        <div>
        {shoppingCart.map((item) =>(
            <>
        <div className="shopping-cart-row">

            <div className="name"> 
            {(products?.filter((product) => (
                (product.id === item.id)))[0].name)}
            </div>  
           
            
            <div className="quantity">
            {item.quantity}
            </div>
           
            <div className="name">
            {(products?.filter((product) => (
                (product.id === item.id)))[0].price)}
            </div>

            <div className="name">
            {(products?.filter((product) => (
            (product.id === item.id)))[0].price * item.quantity)}
            </div>
            
            <div>
                {/* {totalPrice} */}
            </div>
            </div>
            </>
         ))}

        </div> }
        
             
        </>
    )
}
        // here we create a table that shows the items in cart
    //     <>
    //     <table>
    //         <thead>
    //             <tr>
    //             <th>Name</th>
    //             <th>Quantity</th>
    //             <th>Unit Price</th>
    //             <th>Cost</th>
    //             </tr>
                
    //         </thead>
    //         <tbody>

    //             {/* {!shoppingCart.length ?
    //             <tr>
    //                 No item </tr> :

    //                 shoppingCart.map((item)=>{
    //                     <div>{item.quantity}</div>
    //                     // <>
                        
    //                     //     {/* <span>{cartItem.id}</span>
    //                     //     <span>{cartItem.quantity}</span> */}
    //                     {/* // </>
    
    //                   ///  <Singlecartrow key={item.id} item={item}/>
    //                 })
                
    //             }
    //         </tbody>
    //     </table>  */} 
                    
                  
        
    //     {/* // <div className= "open">

    //     //     <h3 className="">Shopping Cart 
    //     //       <span className="button">
    //     //         <i className="material-icons md-48">add_shopping_cart</i>
    //     //       </span>
    //     //     </h3>

    //     //     <div className="notification">No items added to cart yet. Start shopping now!</div>


    //     //     <div className="checkout-form">
    //     //       <h3 className="">
    //     //         Payment Info 
    //     //         <span className="button">
    //     //           <i className="material-icons md-48">monetization_on</i>
    //     //           </span>
    //     //       </h3>
    //     //       <div className="input-field">
    //     //         <label className="label">Name</label>
    //     //         <div class="control ">
    //     //           <input name="name" className="checkout-form-input" type="text" placeholder="Student Name" value=""/>
    //     //             </div>
    //     //           </div>

    //     //         <div className="input-field">
    //     //           <label className="label">Email</label>
    //     //           <div className="control">
    //     //             <input name="email" class="checkout-form-input" type="email" placeholder="student@codepath.org" value=""/>
    //     //           </div>
    //     //         </div>
                
    //     //         <div className="field">
    //     //           <div className="control">
    //     //             <label className="checkbox">
    //     //               <input name="termsAndConditions" type="checkbox"/>
    //     //               <span className="label">I agree to the <a href="#terms-and-conditions">terms and conditions</a></span>
    //     //             </label>
    //     //           </div>
    //     //         </div>
    //     //         <p className="is-danger"></p>
    //     //         <div className="field">
    //     //           <div className="control">
    //     //             <button className="button checkout-button">Checkout</button>
    //     //           </div>
    //     //         </div>
    //     //       </div>
    //     //   </div> */}
    
    // )

