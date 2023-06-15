import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Products from "../Products/Products"
import ProductDetails from "../ProductDetails/ProductDetails"
import SearchBar from "../SearchBar/SearchBar"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import "./App.css"



export default function App() {

  return (

    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <SearchBar />
          <Sidebar /> 
          <Home />
          {/* contains links */}  
          <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
           <Products productTest/> 
            
            {/* contains all of the route paths */}
           <Routes>
              {/* routes to the products (which is my home) */}
              <Route path="/" element={<Products />} />
           </Routes>
           
        </main>
      </BrowserRouter>
    </div>
  )
}

