import React, {useState} from 'react'
import "./SearchBar.css"
import axios from "axios"

export default function SearchBar(){

    const [productInput, setInput] = useState("")
   // const [productInfo, setProductInfo] = useState("")

 

      const handleSubmit = (event) =>{
         event.preventDefault();
        
        
         console.log(productInput)


       // productInput.innerHTML = ""; 
        //  {productInput.filter()}
        //  try{
        //       const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${input}`)

        //    }
      }

      const filterProducts = () =>{

      }

    //retrieves input from user and updates input value using setter-setInput
    const handleInputChange = (event) =>{
        setInput(event.target.value)
        console.log(event.target.value)
    }

    return(
        <>
        <div>
             {/* onSubmit = {handleSubmit} */}
        <form onSubmit =  {handleSubmit}>
            <label>Search:</label>
            {/* When value changes want to do/trigger something */}
            <input 
            type="text" 
            id="productInput" 
            placeholder='search'
            value = {productInput} 
            onChange= {handleInputChange}
            />

            <button type="submit">Submit</button>
        </form>
       
        </div>
       
        </>
    )
};
