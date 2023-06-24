import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import SearchBar from "../SearchBar/SearchBar";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
export default function Overlay({category, setCategory, searchInput, setSearchInput, shoppingCart, quantity, products, setShoppingCart,totalPrice}){
    //item={item}
    return(
        <main>
        <Sidebar 
        shoppingCart={shoppingCart}
        quantity={quantity} 
        products = {products}
        setShoppingCart = {setShoppingCart}
        totalPrice = {totalPrice}
         />
        <Navbar />
        <Hero />
        <SearchBar 
        searchTerm={searchInput} 
        setSearchTerm={setSearchInput} 
        category={category} 
        setCategory={setCategory} 
        />
        <Outlet />

        </main>
    );
}
