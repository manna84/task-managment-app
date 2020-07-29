const express= require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

//This loads all our environment variables from the keys.env
require("dotenv").config({path:'./config/keys.env'});

//import your router objects
const userRoutes = require("./controllers/User");
const taskRoutes = require("./controllers/Task");
const generalRoutes = require("./controllers/General");

//creation of app object
const app = express();

//bodyParser middleware
app.use(bodyParser.urlencoded({extended:false}));

//express static middleware
app.use(express.static("public"));


//Handlebars middlware
app.engine("handlebars",exphbs());
app.set("view engine","handlebars");

//MAPs EXPRESS TO ALL OUR  ROUTER OBJECTS
app.use("/",generalRoutes);
app.use("/user",userRoutes);
app.use("/task",taskRoutes);
app.use("/",(req,res)=>{
    res.render("General/404");
});



mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING , {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('connected to mongoDB');
})

.catch(err=>console.log(`error ${err}`));

const PORT = process.env.PORT;
//Creates an Express Web Server that listens for incomin HTTP Requests
app.listen(PORT,()=>{
    console.log(`Your Web Server has been connected`);
    
});



