import React, {useEffect, useState} from "react"
import axios from "axios"
import "./ProductDetails.css"
import {useParams} from "react-router-dom"

//when user clicks on product want this component to pop up and reveal product details
export default function ProjectDetails(){
   // const {itemId} = useParams()
    const [productId,setProductId] = useState(null);
    
    useEffect(()=> {
        axios.get(`https://codepath-store-api.herokuapp.com/store/${itemId}`)
        .then((response) => {
            setProductId[response.data.product]
            console.log(response.data.product)

        }).catch((error)=> {
            console.error(error); 
        });

    }, [itemId]);

    if(!itemId){
        return <div>Loading...</div>
    }

    const {name, image, description, id} = ProductDetails; 

    return(
        <>
        <h1>Product {id}</h1>
        <div>
           <img src = {image} />
           <p>{name}</p>
           <p>{description}</p>
            
        </div>
        </>
    )

}