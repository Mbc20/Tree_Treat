const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const oracledb = require("oracledb");
const express = require('express');

//app

const app = express();


//routers
const homePageRoute = require("./Routers/homePage");
const loginRoute = require("./Routers/login");
const regRoute = require("./Routers/registration");
const sellerLoginRoute = require("./Routers/sellerLogin");
const buyerLoginRoute = require("./Routers/buyerLogin");
const buyerRegRoute = require("./Routers/buyerReg");
const sellerRegRoute = require("./Routers/sellerReg");
const contactRoute = require("./Routers/contact");



app.use('/',homePageRoute);
app.use('/',loginRoute);
app.use('/',regRoute);
app.use('/',sellerLoginRoute);
app.use('/',buyerLoginRoute);
app.use('/',buyerRegRoute);
app.use('/',sellerRegRoute);
app.use('/',contactRoute);



app.use(express.static(path.join(__dirname,'public')));
app.set('views',path.join(__dirname,'views'));


app.set("view engine","ejs");

const port = 3000;


app.listen(port,()=>{
    console.log("Server is running");
});