import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./Products.css"

export default function Products() {

 //   const [productCard,setProducts] = useState([])
    const [products,setProducts] = useState([])
    
    
    useEffect (() => {
    axios.get("https://codepath-store-api.herokuapp.com/store")
    .then((response)=>{
      setProducts(response.data.products)
       console.log(response.data.products)
        
    }).catch((error)=> {
      console.error(error); 
    });
    
    },[])

    return(
        <>
       <div>
         <div>
            <h2>Best Selling Products</h2> 
        </div>
         
        

        <div id="productContainer">
            {products?.map((product)=> (

              <>
              <div>
              <img id="imageFix" src = {product.image} />
              <p>{product.name}</p>
              <p>{product.price}</p>
              </div>
             
              </>
               
                // <li key={product.name}>
                //      {product.name}
                // </li>
                
                    
            ))}

        </div>
        
     </div>
        </>
    )
}


 