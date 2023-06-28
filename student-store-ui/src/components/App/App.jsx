import * as React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import "./App.css";
import { useEffect, useState } from "react";
import About from "../About/About";
import ProductDetails from "../ProductDetails/ProductDetails";
import Overlay from "../Overlay/Overlay";

export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store";

  //setting up state variables
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");
  let [quantity, setQuantity] = useState({})
  let [shoppingCart, setShoppingCart] = useState([])
  

  useEffect(() => {
    axios.get(url).then((response) => {
      
      setProducts(response.data.products);
    });
  }, []);

    //adds product and quantity to shoppingCart array
    const addProduct = (productId) =>{

      //checks if product already exists and if so increase quantities state
      if(productId in quantity){
        const add = {...quantity, [productId]: quantity[productId]+1};
        setQuantity(add)

      //creates new product and sets its quantity to 1
      }else{
        const newProduct = {...quantity, [productId]: 1}; 
        setQuantity(newProduct)
      }

      //checks if a product already exists inside the shoppingCart array
      const cartItem = shoppingCart?.find((item)=> item.id == productId);

      //if the item already exists inside the cart map through the cart until its found and update the item's quantity
      if(cartItem){   
        const updateCart = shoppingCart?.map((item)=>{
          if(item.id == productId){
            return {...item, quantity: item.quantity+1}
          }
      
          return item; 
        }); 

        setShoppingCart(updateCart)
        item.quantity++
        item.cost = item.cost + item.unitPrice

        setTotalPrice(totalPriceRef.current + item.unitPrice)

      //else add new product to the shoppingCart
      }else{
        setShoppingCart([...shoppingCart,{id: productId, quantity:1}])
      }
    }

     //removes product and quantity to shoppingCart array
    const removeProduct = (productId) =>{
      const cartItem = shoppingCart?.filter((item)=> item.id == productId);

       const updateCart = shoppingCart?.filter((item,index)=>{ 

        //checks if cartItme exists and if the quantity of the item at 1 then need to splice item out of shopping cart and update the carts state
         if(cartItem && (item.quantity == 1)){
           if(item.id == productId){
                 const updatedCart = shoppingCart.splice(index, 1)
                 return(setShoppingCart([...updatedCart]))
            }
  
         } else if(item.id == productId){
           return {...item, quantity: item.quantity-1}
  
         }
       })
      
        if(cartItem){   
        const updateCart = shoppingCart?.map((item)=>{
             

             if (item.quantity == 0){
               const updatedCart = shoppingCart.filter(item => item.id == productId.id)
               return(setShoppingCart([...updatedCart]))
             }

            if(item.id == productId){
                
               return {...item, quantity: item.quantity-1}
             }

            console.log(item)
           return item; 
          }); 
          setShoppingCart(updateCart)
       }
    }

      

  return (
    
    <div className="app">
      <BrowserRouter>
        <main>
          
          {/* routes linking to to different components in website */}
          <Routes>
            <Route path="" element={<Overlay 
            category={category} 
            setCategory={setCategory} 
            searchInput={searchTerm} 
            setSearchInput={setSearchTerm}
            shoppingCart = {shoppingCart}
            quantity = {quantity}
            products = {products}
            setShoppingCart = {setShoppingCart}
            />}>

              <Route path="" element={<Home products={products} searchTerm={searchTerm} category={category} addProduct={addProduct} removeProduct={removeProduct}/>} />  
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path = "" element= {<About/>}/>
            </Route>
          </Routes>

        </main>
      </BrowserRouter>
    </div>
  );
}

