import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
  console.log("Connected to Mongo!");
}).catch((err)=>{
    console.log(err);
})

const app = express(); //create an app

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//install nodemon for refreshing the server. run npm i nodemon on terminal
