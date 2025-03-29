const express = require('express');
const app = express();
const userRouter = require("./routes/user.routes");
const dotenv = require("dotenv");
dotenv.config();
const connectToDB = require("./config/db")
connectToDB();
const cookieparser = require("cookie-parser");

app.set("view engine",'ejs');
app.use(cookieparser())
app.use(express.json());
app.use(express.urlencoded ({extended:true}));

  
app.use('/user', userRouter);
  
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});