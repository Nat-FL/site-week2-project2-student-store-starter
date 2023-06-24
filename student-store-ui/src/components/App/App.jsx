import * as React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import "./App.css";
import { useEffect, useState } from "react";
import About from "../About/About";
import ProductDetails from "../ProductDetails/ProductDetails";
import Overlay from "../Overlay/Overlay";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import {useRef} from "react"

export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store";

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");

  let [quantity, setQuantity] = useState({})
  let [shoppingCart, setShoppingCart] = useState([])
  let totalCost = useRef(0)

  //console.log(products);
  useEffect(() => {
    axios.get(url).then((response) => {
      
      setProducts(response.data.products);
    });
  }, []);


    const setTotalPrice = (newTotalPrice) => {
      //totalPriceRef.current = newTotalPrice; 
    }
    const addProduct = (productId) =>{
      
      if(productId in quantity){
        const add = {...quantity, [productId]: quantity[productId]+1};
        setQuantity(add)
        console.log("product id:" + productId)

      }else{
        const newProduct = {...quantity, [productId]: 1}; //creates new product 
        setQuantity(newProduct)
      }

      const cartItem = shoppingCart?.find((item)=> item.id == productId);

      if(cartItem){
        
        const updateCart = shoppingCart?.map((item)=>{
          if(item.id == productId){
            return {...item, quantity: item.quantity+1}
          }
          console.log(item)
          return item; 
        }); 
        setShoppingCart(updateCart)
        item.quantity++
        item.cost = item.cost + item.unitPrice
        setTotalPrice(totalPriceRef.current + item.unitPrice)
      }else{
        setShoppingCart([...shoppingCart,{id: productId, quantity:1}])
      }
    }

    const removeProduct = (productId) =>{
      
       if(productId in quantity){
           const remove = {...quantity, [productId]: quantity[productId]-1};
        setQuantity(remove)
         console.log("product id:" + productId)
         console.log("quantity: ", quantity)
        }
        // const remove = {...quantity, [productId]: quantity[productId]-1};
      //  // setQuantity(remove)
      //  // console.log("product id:" + productId)

      // }
      

      const cartItem = shoppingCart?.filter((item)=> item.id == productId);

      // const updateCart = shoppingCart?.filter((item)=>{ 
      //   if(cartItem && (item.quantity == 0)){
      //     if(item.id == productId){
      //       // item => item.id == productId.id)
      //           return(setShoppingCart([...updateCart]))
      //     }
  
      //   }else if(item.id == productId){
      //     return {...item, quantity: item.quantity-1}
  
      //   }
      // })
      
        if(cartItem){
        
        const updateCart = shoppingCart?.map((item)=>{
             console.log("item quantity:" , item.quantity)
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
          //  totalCost = {totalPriceRef.current}
           // item = {item}
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

