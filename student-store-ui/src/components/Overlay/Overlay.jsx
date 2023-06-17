import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Sidebar from "../Sidebar/Sidebar";
import SearchBar from "../SearchBar/SearchBar";
import { Outlet } from "react-router-dom";

export default function Overlay({category, setCategory, searchInput, setSearchInput}){
    return(
        <main>
        <Navbar />
        <Hero />
        <Sidebar />
        <SearchBar searchTerm={searchInput} setSearchTerm={setSearchInput} category={category} setCategory={setCategory} />
        {/* <About/> */}
        <Outlet />

        </main>
    );
}