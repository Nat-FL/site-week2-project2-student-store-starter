import React, {useState} from "react"
import "./Categories.css"
import Products from "../Products/Products"
export default function Categories({products}){
  
    // const [category, setCategory] = useState ([])
    // const [filteredData, setFilteredData] = useState(null)

    // console.log(allCategories)

    // const handleCategoryChange = (event,category) =>{
    //     event.preventDefault();
    //     console.log(category)
    //     setFilteredData(products.filter((product) => product.category === category))
        
    // }

    // return(
        
    //     <>
          
    //         <div id='sub-navbar'>
    //             <p id="allCategory" onClick={ (event) => handleCategoryChange(event,'clothing')} >All Categories</p> 
    //             <p id="clothingCategory" onClick={ (event) => handleCategoryChange(event,'clothing')} >Clothing</p>
    //             <p id="foodCategory" onClick={ (event) => handleCategoryChange(event,'food')} >Food</p>
    //             <p id="accessoriesCategory" onClick={ (event) => handleCategoryChange(event,'accessories')}>Accessories</p>
    //             <p id="techCategory" onClick={ (event) => handleCategoryChange(event,'tech')}>Tech</p>

    //         </div>
            
    //          {filteredData ? (<><Products products={filteredData} /></>): (<><Products products={products} /></>)} 
             
    //     </>
         
    // )
}