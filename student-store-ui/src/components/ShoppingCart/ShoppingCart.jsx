import React,{useState, useEffect} from "react"
import "./ShoppingCart.css"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
    export default function ShoppingCart({shoppingCart, quantity, products, totalPrice, subtotal, setSubTotal, taxes, setTaxes, total, setTotal, setShoppingCart, checkout, setCheckout}){
   
    //setting up states for function
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [receiptItems, setReceiptItems] = useState({})
    const [receiptName, setReceiptName] = useState("") //used to retain user's name they input in receipt after shoppingCart reset
    const [receiptEmail, setReceiptEmail] = useState("") //used to retain user's email they input in receipt after shoppingCart reset
   

    //event button taht when clicked on triggers checkout section to show up and resets shopping cart
    const handleReceiptBtn = () =>{

        setCheckout(true)

        //created a new object to take in shopping cart information so that it can be printed in receipt section when shoppingCart reset
        setReceiptItems({
          shoppingCart: shoppingCart,
          subtotal: subtotal, 
          taxes: taxes, 
          total: total, 
        });

        setReceiptName(name)
        setReceiptEmail(email)
        setShoppingCart([]) 
        setEmail("")    
        setName("") 
      }

    //calculates subtotal, taxes, and total cost
    useEffect(()=> {

        const calcSubTotal = () => {
            let newSubTotal = 0; 

          shoppingCart?.forEach((cart)=>{
              let price = 0; 

              for(let item of products){
                  if(cart.id === item.id){
                        price = item.price
                  }
              }
              newSubTotal += price * cart.quantity; 
            }); 

          setSubTotal(newSubTotal); 

        };

        const calcTaxes = () =>{
            const taxRate = 0.0875
            const newTaxes = subtotal * taxRate; 
            setTaxes(newTaxes)
        };

        const calcTotal = () =>{
            const newTotal = subtotal + taxes
            setTotal(newTotal)
        };

        calcSubTotal(); 
        calcTaxes(); 
        calcTotal(); 
    }, [shoppingCart, subtotal, taxes]);


    return(

      <div className="shopping-cart">
      <div className="open">
        <h3 className="">
          Shopping Cart{" "}
          <span className="button">
            <i className="material-icons md-48">add_shopping_cart</i>
          </span>
        </h3>

        {/* checks if shopping cart has anything in it or not and depending on state will display no itmes in art or show items currently in cart */}
        {shoppingCart?.length === 0 ? (
          <div className="notification">
            No items added to cart yet. Start shopping now!
          </div>
        ) : (
          <div className="CartTable">
            <div className="header">
              <div className="header-row">
                <span className="flex-2">Name</span>
                <span className="center">Quantity</span>
                <span className="center">Unit Price</span>
                <span className="center">Cost</span>
              </div>

              {shoppingCart.map((item) => (
                <div className="product-row">
                  <span className="flex-2 cart-product-name">
                    {
                      products?.filter((product) => product.id === item.id)[0]
                        .name
                    }
                  </span>

                  <span className="center cart-product-quantity">
                    {item.quantity}
                  </span>

                  <span className="center cart-product-price">
                    $
                    {products
                      ?.filter((product) => product.id === item.id)[0]
                      .price.toFixed(2)}
                  </span>

                  <span className="center cart-product-subtotal">
                    $
                    {(
                      products?.filter((product) => product.id === item.id)[0]
                        .price * item.quantity
                    ).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="receipt">
              <div className="receipt-subtotal">
                <span className="label">Subtotal</span>
                <span></span>
                <span></span>
                <span className="center subtotal">${subtotal.toFixed(2)}</span>
              </div>
              <div className="receipt-taxes">
                <span className="label">Taxes and Fees</span>
                <span></span>
                <span></span>
                <span className="center">${taxes.toFixed(2)}</span>
              </div>
              <div className="receipt-total">
                <span className="label">Total</span>
                <span></span>
                <span></span>
                <span className="center total-price">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}

        <div className="checkout-form">
          <h3 className="">
            Payment Info{" "}
            <span className="button">
              <i className="material-icons md-48">monetization_on</i>
            </span>
          </h3>
          <div className="input-field">
            <label className="label">Name</label>
            <div className="control ">
              <input
                name="name"
                className="checkout-form-input"
                type="text"
                onChange={(event) => setName(event.target.value)}
                placeholder="Student Name"
                value={name}
              />
            </div>
          </div>
          <div className="input-field">
            <label className="label">Email</label>
            <div className="control">
              <input
                name="email"
                className="checkout-form-input"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="student@codepath.org"
                value={email}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input name="termsAndConditions" type="checkbox" />
                <span className="label">
                  I agree to the{" "}
                  <a href="#terms-and-conditions">terms and conditions</a>
                </span>
              </label>
            </div>
          </div>
          
          <div className="field">
            <div className="control">
              <button
                className="button checkout-button" onClick={handleReceiptBtn}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
        <div className="checkout-success">
          <h3>
            Checkout Info{" "}
            <span className="icon button">
              <i className="material-icons md-48">fact_check</i>
            </span>
          </h3>

          {/* checks if checkout state true or not and if true then show checkout information or  confirmation of checkout complete*/}
          {!checkout ? (
            <div className="content">
              <p>
                A confirmation email will be sent to you so that you can confirm
                this order. Once you have confirmed the order, it will be
                delivered to your dorm room.
              </p>
            </div>

          ) : (
            <CheckoutForm
               products={products}
               email={email}
               name={name}
               receiptItems={receiptItems}
               setCheckout={setCheckout}
               receiptName = {receiptName}
               receiptEmail = {receiptEmail}
            />
          )}
        </div>
      </div>
    </div>
  );
  }
    
          
