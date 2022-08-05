//to create the server we want to run our application 
const express = require('express');
const app = express();
//to communicate with the database
const mongoose = require('mongoose');
//converts the json request to a js object(as the json format cannot be understood by the server)
const bodyParser = require("body-parser");
//CORS node.js package provides a connect/ middleware that can be used to enable CORS with various options 
const cors = require('cors');


//import routes

//middlewares of the route

//declaring the port
const port = 3000;

//variable for the database url

//listen to the port
app.listen(port, () => {
    console.log("App is running on port %d", port);
});