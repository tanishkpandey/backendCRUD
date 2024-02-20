const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');
const app = express()
const dotenv = require("dotenv").config();
port = process.env.port

// this will parse the data string
app.use(express.json());

// connect DB
connectDB();

app.use("/api/contacts", require('./routes/contactRoutes'))
app.use(errorHandler)
app.listen(port, ()=>{
    console.log(`The server started ${port}`)
})