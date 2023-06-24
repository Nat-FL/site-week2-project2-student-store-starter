import * as React from "react"
import "./Home.css"
import About from "../About/About"
import ContactUs from "../Contact/Contact"
import Footer from "../Footer/Footer"
import Products from "../Products/Products"

export default function Home({products,searchTerm,category, addProduct, removeProduct}) {

  
  return (
     <div className="home">
      <div className="products">
        <div className="content">
          <h3>Best Selling Products</h3>
          <Products products={products} searchTerm={searchTerm} category={category} addProduct={addProduct} removeProduct={removeProduct}/>
          <About />
          <ContactUs />
          <Footer />
          </div>
        </div>
      </div>

  );
}
