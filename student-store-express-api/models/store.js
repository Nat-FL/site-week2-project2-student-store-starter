 const {storage} = require("../data/storage") //imports storage-which is an object of Storage class-able to access class attributes

 //database.products
const getAllProducts = () =>{
    return  storage.get("products");  //takes in key=products and has db get certain values based off key 
};

 const getProduct = (id) =>{
    return storage.get(`products.${id-1}`)
}

module.exports = {
    getAllProducts,
    getProduct
}
