import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./routes/User_route.js";
import authRouter from "./routes/Auth_route.js";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express(); //create an app
app.use(express.json()); //allow json as input to the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//install nodemon for refreshing the server. run npm i nodemon on terminal

//api routes
//1.Send (res) a message from server to brower.
// app.get('/api/user/test',(req,res)=>{
// res.send('Hello World');
// })

app.use("/api/user/", UserRouter);
app.use("/api/auth", authRouter);
