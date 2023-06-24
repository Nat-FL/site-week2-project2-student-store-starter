const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const app = express()
const storeRouter = require("./routes/store") //imports storeRouter which can be used to link to store.js(routes) 
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

//route for store
app.use("/store", storeRouter) //links front end and back end together-use this to create bridge between desired route that user puts in and response that should occur when route initiated

app.get("/", async (req, res)=>{
    res.send({ping:"pong"})
})


module.exports = app; 


